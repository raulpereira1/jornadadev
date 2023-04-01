import React, {useState} from "react"
import "./VideoSideBar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar ({likes,messages,share}){

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
                    <br/>{liked ? likes + 1 : likes}
                </div>
                <div className="VideoSideBar__options">
                    <ChatIcon fontSize="large"/>
                    <br/>{liked ? messages + 1 : messages}
                </div>
                <div className="VideoSideBar__options">
                    <ShareIcon fontSize="large"/>
                    <br/>{liked ? share + 1 : share}
                </div>
            </div>
    )
}

export default VideoSideBar