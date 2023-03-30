import React, { useRef, useState } from 'react';
import "./Video.css";

function Video() {
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
            src="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
            >
                
            </video>
        </div>
        )
}

export default Video