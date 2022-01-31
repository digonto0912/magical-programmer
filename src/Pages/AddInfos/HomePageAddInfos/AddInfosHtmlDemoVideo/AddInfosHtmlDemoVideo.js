import React,{useRef} from 'react';
import "./AddInfosHtmlDemoVideo.css";

const UpdateHtmlDemoVideo = () => {

    const numberRef = useRef();
    const videoNameRef = useRef();
    const videoDurationRef = useRef();
    const videoDisRef = useRef();

    const submit = e => {
        e.preventDefault();
    }
    const submitBtn = () => {
        const number = numberRef.current.value;
        const videoName = videoNameRef.current.value;
        const videoDuration = videoDurationRef.current.value;
        const videoDis = videoDisRef.current.value;
        const newHtmlDemoVideoInfo = {number, videoName, videoDuration, videoDis};
    
        fetch("http://localhost:2333/AddInfosHtmlDemoVideo", {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHtmlDemoVideoInfo)
        })
        .then()
    }

    
    return (
        <div className="updates-input-pages">
            <form onSubmit={submit}>
            <input type="text" ref={numberRef} placeholder="Number" />
            <input type="text" ref={videoNameRef} placeholder="video Name" />
            <input type="text" ref={videoDurationRef} placeholder="video Duration" />
            <input type="text" ref={videoDisRef} placeholder="video Dis" />
            <input type="submit" onClick={submitBtn} placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateHtmlDemoVideo;