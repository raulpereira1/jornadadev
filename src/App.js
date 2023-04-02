import "./App.css";
import Videos from "./pages/Video.js";
import db from "./config/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

let maxHeight;
if(window.innerHeight <=800){
  maxHeight = window.innerHeight
}


  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosColletion = collection(db, "Videos");
    const videosSnapShot = await getDocs(videosColletion);
    const videosList = videosSnapShot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App"  style={{maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Videos
              likes={item.likes}
              messages={item.messages}
              share={item.share}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
