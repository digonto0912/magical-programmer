import React, {useEffect, useState} from 'react';
import "./DemoVideoCards.css";
import image1 from "../../../../images/Home-img/htmlDemoVideo.png";
import image2 from "../../../../images/Home-img/cssDemoVideo.png";

const DemoVideoCards = () => {

    const [HTMLvideoLists, setHTMLvideoLists] = useState([]);
    const [CSSvideolists, setCSSvideoLists] = useState([]);

    useEffect(()=>{
        fetch("https://blooming-island-64834.herokuapp.com/htmlDemoVideos")
        .then(res => res.json())
        .then(data => setHTMLvideoLists(data))
    },[]);

    useEffect(()=>{
        fetch("https://blooming-island-64834.herokuapp.com/cssDemoVideos")
        .then(res => res.json())
        .then(data => setCSSvideoLists(data))
    },[]);

    return (
        <div className="DVCs">
            
            {/* card 1 */}
                <div className="DVC">
                    <div>
                    <h4 className="nameOfCard">
                        HTML Tutorial
                    </h4>

                    {
                        HTMLvideoLists.map(HTMLvideoList => <>
                        <div className="listOfVideo"><div className="videoListNumber">{HTMLvideoList.number}</div>
                        <div className="videoList">
                            <div  className="videoInfos">
                                <h4>{HTMLvideoList.videoName}</h4>
                            <div className="timeRange">
                                    {HTMLvideoList.videoDuration}
                            </div>
                            </div>
                                <h6  className="videoDis">{HTMLvideoList.videoDis}</h6>
                        </div>
                    </div>
                        </>)
                    }
                    
                </div>

                <div className="imgCard1 imgCard">
                    <img src={image1} />
                    <h4>
                        we teach all we can about them.
                    </h4>
                    <h6>
                        10 videos - 2 hours
                    </h6>
                </div>
            </div>
            
            
            {/* card 2 */}
            <div className="DVC">
<div className="imgCard imgCard2">
<img src={image2} />
<h4>
we teach all we can about them.
</h4>
<h6>
10 videos - 2 hours
</h6>
</div>

<div>
                    <h4 className="nameOfCard">
                        CSS Tutorial
                    </h4>
                    {
                        CSSvideolists.map(CSSvideolist => <>
                        <div className="listOfVideo">
<div className="videoListNumber">{CSSvideolist.number}</div>
                        <div className="videoList">
<div  className="videoInfos">
<h4>{CSSvideolist.videoName}</h4>
<div className="timeRange">
{CSSvideolist.videoDuration}
</div>
</div>
<h6  className="videoDis">{CSSvideolist.videoDis}</h6>
</div>
                    </div>
                        </>)
                    }
                    
                </div>
                
</div>
        </div>
    );
};

export default DemoVideoCards;