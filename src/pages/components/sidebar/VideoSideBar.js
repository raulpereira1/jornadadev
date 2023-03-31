import React, {useState} from "react"
import "./VideoSideBar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar (){

    const[liked, setLiked] = useState(false)
    function handdleLike (){
            setLiked(!liked)
    }
    return(
            <div className="VideoSideBar">
                <div 
                className="VideoSideBar__options"
                onClick={handdleLike}
                >
                    { liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/> }
                    <p>{liked ? 300 + 1 : 300}</p>
                </div>
                <div className="VideoSideBar__options">
                    <ChatIcon fontSize="large"/>
                    <p>400</p>
                </div>
                <div className="VideoSideBar__options">
                    <ShareIcon fontSize="large"/>
                    <p>200</p>
                </div>
            </div>
    )
}

export default VideoSideBar