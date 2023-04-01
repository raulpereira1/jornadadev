import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './components/footer/VideoFooter';
import VideoSideBar from './components/sidebar/VideoSideBar';
function Video({likes,messages,share,name,description,music, url}) {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)


    function handleStart (){
        

        if(play){
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }



    return (
        <div className="Video">
            
            <video
            className="video__player"
            ref={videoRef}
            onClick={handleStart}
            loop
            src={url}
            >
                
            </video>
        <VideoSideBar
            likes={likes}
            messages={messages}
            share={share}
         />
        <VideoFooter
        name={name}
        description={description}
        music={music}
        />

        </div>
        )
}

export default Video