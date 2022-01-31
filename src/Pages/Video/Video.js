import React,{useState, useEffect} from 'react';
import './Video.css';


const Video = () => {

    const [VideoLists, setVideoLists] = useState([]);

    useEffect(()=>{
        // fetch("http://localhost:2333/videoList")
        fetch("./API/videoList.json")
        .then(res => res.json())
        .then(data => setVideoLists(data))
    },[]);
    
    // openThisModuleBox function
    const openThisModuleBox = (milestoneId) => {
        const currentPanels = document.getElementsByClassName("module-cards");
        const shownPanel = document.querySelector(".show");
        
        if(shownPanel && !currentPanels[milestoneId].classList.contains("show")){
            shownPanel.classList.remove("show");
        }
        currentPanels[milestoneId].classList.toggle("show");

        showImg(milestoneId);
    }

    // openThisVideoBox function
    const openThisVideoBox = (moduleCardsId) => {
        const videosBox = document.querySelectorAll(".module-card-videos");
        // const shownPanel = document.querySelector(".show");
        
        videosBox[moduleCardsId].classList.toggle("show");
    }

    const showImg= (milestoneId) =>{
        const imgBox = document.querySelector(".video-div");

        imgBox.src = VideoLists[milestoneId].img;
    }

    return (
        <div>
            <div className="v-nav-bg"></div>

            <div className='videoPage d-flex'>
            <div className='video-side'>
                {/* headline */}
                <h1 className='headline'>Complite web developing course with "Fardul Digonto"</h1>

                {/* video */}
                <img src="" className="video-div" />

                {/* comment box */}
                <div className="commentBox">

                    {/* comments */}
                    <div className="commnets">
                        <div className="comment">
                            {/* Profile Picture */}
                            <div className="PP">
                                PP
                            </div>
                            
                            <div className="comment-text-box">
                                {/* Profile Name */}
                                <div className="PN">
                                    PN
                                </div>
                                {/* Comment Text */}
                                <div className="CT">
                                    comment-text-1
                                </div>
                            </div>
                        </div>

                        <div className="comment">
                            {/* Profile Picture */}
                            <div className="PP">
                                PP
                            </div>
                            
                            <div className="comment-text-box">
                                {/* Profile Name */}
                                <div className="PN">
                                    PN
                                </div>
                                
                                {/* Comment Text */}
                                <div className="CT">
                                    comment-text-2
                                </div>
                            </div>
                        </div>

                        <div className="comment">
                            {/* Profile Picture */}
                            <div className="PP">
                                PP
                            </div>
                            
                            <div className="comment-text-box">
                                {/* Profile Name */}
                                <div className="PN">
                                    PN
                                </div>
                                
                                {/* Comment Text */}
                                <div className="CT">
                                    comment-text-2
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                    {/* post comments */}
                    <div className="commentPost">
                        <input type="text" placeholder="write your comment" name="postComment" id="postInput" />

                        <input type="submit" value="post" className='post-btn' />
                    </div>
            </div>

            {/* video name list */}
            <div className="video-name-list">
                
                {/* search */}
                <div className="search-top-div">
                <div className="search-div">
                    <input type="search" name="search" placeholder="search" id="" className="search-input" />
                </div>
                </div>

                {/* cards */}
                <div className="all-milestone-cards">
                {
                    VideoLists.map(VideoList => <>
                    <div className="milestone-card-0">

                    <div className="milestone-card">
                        <div>
                            <h3 className="milestone-card-headline">{VideoList.headline}</h3>
                            <div className="d-flex">
                                <div className="pe-2">{VideoList.timeDuration}</div>
                                <div>{VideoList.complited}</div>
                            </div>
                        </div>
                        
                        <button onClick={ () => openThisModuleBox(VideoList.milestoneId)} className="milestone-card-btn">
                            icon
                        </button>
                    </div>

                    {/* 2nd card = module card */}
                    <ul className="module-cards" id="module-cards">
                        <li className="module-card">
                            {VideoList.moduleCards.moduleCard.moduleCardName}
                            
                            <button onClick={ () => openThisVideoBox(VideoList.moduleCards.moduleCardsId)} className="milestone-card-btn">
                                2nd icon
                            </button>

                            <ul className="module-card-videos show">
                                <li className="module-card-video">
                                    {VideoList.moduleCards.moduleCard.videos.videoName}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                    </>)
                }
                </div>

            </div>
            </div>
        </div>
    );
};

export default Video;