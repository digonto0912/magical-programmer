import React,{useState, useEffect} from 'react';
import "./UpdateCssDemoVideo.css";
import {useParams} from "react-router";

const UpdateCssDemoVideo = () => {
    
    const [CssDemoVideoData, setCssDemoVideoData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateCssDemoVideo/${id}`)
        .then(res => res.json())
        .then(data => setCssDemoVideoData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateNumber = e => {
        const Number = e.target.value;
        const UpdateCssDemoVideoData = {number:Number, videoName:CssDemoVideoData.videoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(UpdateCssDemoVideoData);

        setCssDemoVideoData(UpdateCssDemoVideoData);
    }
    const updateVideoName = e => {
        const VideoName = e.target.value;
        const UpdateCssDemoVideoData = {number:CssDemoVideoData.number, videoName:VideoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(UpdateCssDemoVideoData);

        setCssDemoVideoData(UpdateCssDemoVideoData);
    }
    const updateVideoDuration = e => {
        const VideoDuration = e.target.value;
        const UpdateCssDemoVideoData = {number:CssDemoVideoData.number, videoName:CssDemoVideoData.videoName, videoDuration:VideoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(UpdateCssDemoVideoData);

        setCssDemoVideoData(UpdateCssDemoVideoData);
    }
    const updateVideoDis = e => {
        const VideoDis = e.target.value;
        const UpdateCssDemoVideoData = {number:CssDemoVideoData.number, videoName:CssDemoVideoData.videoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:VideoDis};
        console.log(UpdateCssDemoVideoData);

        setCssDemoVideoData(UpdateCssDemoVideoData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateCssDemoVideo/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CssDemoVideoData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {CssDemoVideoData.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateNumber} value={CssDemoVideoData.number || ""} />
            <input type="text" onChange={updateVideoName} value={CssDemoVideoData.videoName || ""} />
            <input type="text" onChange={updateVideoDuration} value={CssDemoVideoData.videoDuration || ""} />
            <input type="text" onChange={updateVideoDis} value={CssDemoVideoData.videoDis || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCssDemoVideo;