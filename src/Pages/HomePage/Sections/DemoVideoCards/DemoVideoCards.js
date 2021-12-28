import React from 'react';
import "./DemoVideoCards.css";

const DemoVideoCards = () => {
    return (
        <div className="DVCs">
            
            {/* card 1 */}
                <div className="DVC">
<div>
                    <h4 className="nameOfCard">
                        HTML Tutorial
                    </h4>
                    <div className="listOfVideo">
<div className="videoListNumber">1</div>
                        <div className="videoList">
<div  className="videoInfos">
<h4>Html Test</h4>
<div className="timeRange">
2:30
</div>
</div>
<h6  className="videoDis">halka ektu html er test chacke dekho</h6>
</div>
                    </div>
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
                    <div className="listOfVideo">
<div className="videoListNumber">1</div>
                        <div className="videoList">
<div  className="videoInfos">
<h4>Html Test</h4>
<div className="timeRange">
2:30
</div>
</div>
<h6  className="videoDis">halka ektu html er test chacke dekho</h6>
</div>
                    </div>
                </div>
                
</div>
        </div>
    );
};

export default DemoVideoCards;