import React,{useState, useEffect} from 'react';
import './Video.css';

const Video = () => {

    const [VideoLists, setVideoLists] = useState([]);

    useEffect(()=>{
        fetch("./API/videoList.json")
        .then(res => res.json())
        .then(data => setVideoLists(data))
    },[]);

    return (
        <div>
            <div className="v-nav-bg"></div>

            <div className='videoPage d-flex'>
            <div className='video-side'>
                {/* headline */}
                <h1 className='headline'>Complite web developing course with "Fardul Digonto"</h1>

                {/* video */}
                <video className="video-div" />

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
                <div className="search-div">
                    <input type="search" name="search" placeholder="search" id="" className="search-input" />
                </div>

                {/* cards */}
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
                        
                        <button className="milestone-card-btn">
                            icon
                        </button>
                    </div>

                    <ul id={VideoList.id} className="module-cards">
                        <li className="module-card">
                            {VideoList.moduleCards.moduleCard.moduleCardName}
                            <ul className="module-card-videos">
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
    );
};

export default Video;