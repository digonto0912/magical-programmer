import React,{useState, useEffect} from 'react';
import "./UpdateHtmlDemoVideo.css";
import {useParams} from "react-router";

const UpdateHtmlDemoVideo = () => {
    
    const [HtmlDemoVideoData, setHtmlDemoVideoData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateHtmlDemoVideo/${id}`)
        .then(res => res.json())
        .then(data => setHtmlDemoVideoData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateNumber = e => {
        const Number = e.target.value;
        const UpdateHtmlDemoVideoData = {number:Number, videoName:HtmlDemoVideoData.videoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(UpdateHtmlDemoVideoData);

        setHtmlDemoVideoData(UpdateHtmlDemoVideoData);
    }
    const updateVideoName = e => {
        const VideoName = e.target.value;
        const UpdateHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:VideoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(UpdateHtmlDemoVideoData);

        setHtmlDemoVideoData(UpdateHtmlDemoVideoData);
    }
    const updateVideoDuration = e => {
        const VideoDuration = e.target.value;
        const UpdateHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:HtmlDemoVideoData.videoName, videoDuration:VideoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(UpdateHtmlDemoVideoData);

        setHtmlDemoVideoData(UpdateHtmlDemoVideoData);
    }
    const updateVideoDis = e => {
        const VideoDis = e.target.value;
        const UpdateHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:HtmlDemoVideoData.videoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:VideoDis};
        console.log(UpdateHtmlDemoVideoData);

        setHtmlDemoVideoData(UpdateHtmlDemoVideoData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateHtmlDemoVideo/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(HtmlDemoVideoData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {HtmlDemoVideoData.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateNumber} value={HtmlDemoVideoData.number || ""} />
            <input type="text" onChange={updateVideoName} value={HtmlDemoVideoData.videoName || ""} />
            <input type="text" onChange={updateVideoDuration} value={HtmlDemoVideoData.videoDuration || ""} />
            <input type="text" onChange={updateVideoDis} value={HtmlDemoVideoData.videoDis || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateHtmlDemoVideo;