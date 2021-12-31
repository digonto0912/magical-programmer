import React, {useEffect, useState} from 'react';
import "./DemoVideoCards.css";

const DemoVideoCards = () => {

    const [HTMLvideoLists, setHTMLvideoLists] = useState([]);
    const [CSSvideolists, setCSSvideoLists] = useState([]);

    useEffect(()=>{
        fetch("./API/HTMLDemoVideoCardApi.json")
        .then(res => res.json())
        .then(data => setHTMLvideoLists(data))
    },[]);

    useEffect(()=>{
        fetch("./API/CSSDemoVideoCardApi.json")
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
                        <div className="listOfVideo"><div className="videoListNumber">{HTMLvideoList.id}</div>
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

                <div className="imgCard">
                    <img src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
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
<div className="imgCard">
<img src="https://images.ctfassets.net/ooa29xqb8tix/2KiUooJBmI26N6u5gr2rlm/e2bb070640fe2778e1a58d160335cbe7/React_Hooks_handbook_800x600_cover_new.png?w=400&q=50" />
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
<div className="videoListNumber">{CSSvideolist.id}</div>
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