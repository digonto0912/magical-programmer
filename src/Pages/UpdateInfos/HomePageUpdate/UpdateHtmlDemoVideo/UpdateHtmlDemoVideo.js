import React,{useRef, useState, useEffect} from 'react';
import "./UpdateHtmlDemoVideo.css";
import {useParams} from "react-router";

const UpdateHtmlDemoVideo = () => {
    
    const [HtmlDemoVideoData, setHtmlDemoVideoData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateHtmlDemoVideo/${id}`)
        .then(res => res.json())
        .then(data => setHtmlDemoVideoData(data))
    }, [])
    
    // params
    const {id} = useParams();
    // function
    const submit = e => {
        e.preventDefault();
    }
    const updateNumber = e => {
        const NumberValue = e.target.value;
        const UpdateHtmlDemoVideoData = {...HtmlDemoVideoData};
        UpdateHtmlDemoVideoData.number = NumberValue;
        setHtmlDemoVideoData(UpdateHtmlDemoVideoData);
    }
    const updateVideoName = e => {
        const VideoNameValue = e.target.value;

    }
    const updateVideoDuration = e => {
        const VideoDurationValue = e.target.value;
    }
    const updateVideoDis = e => {
        const VideoDisValue = e.target.value;
    }
    const submitBtn = e => {
        const VideoDisValue = e.target.value;
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {HtmlDemoVideoData.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateNumber} value={HtmlDemoVideoData.name || ""} />
            <input type="text" onChange={updateVideoName} value={HtmlDemoVideoData.videoName || ""} />
            <input type="text" onChange={updateVideoDuration} value={HtmlDemoVideoData.videoDuration || ""} />
            <input type="text" onChange={updateVideoDis} value={HtmlDemoVideoData.videoDis || ""} />

            <input type="submit" onClick={submitBtn} placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateHtmlDemoVideo;