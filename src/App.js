
import './App.css';
import Videos from "./pages/Video.js";
function App() {
  return (
    <div className="App">
      <div className="app__videos">
     <Videos
     likes={111}
     messages={222}
     share={333}
     name="Raul Pereira"
     description="Alongamento salva vidas"
     music="voz maluca"
     url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
     />
     
     
     
      </div>
    </div>
  );
}

export default App;
