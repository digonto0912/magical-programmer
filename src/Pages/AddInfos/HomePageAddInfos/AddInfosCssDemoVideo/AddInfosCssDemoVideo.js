import React,{useState, useEffect} from 'react';
import "./AddInfosCssDemoVideo.css";
import {useParams} from "react-router";

const AddInfosCssDemoVideo = () => {
    
    const [CssDemoVideoData, setCssDemoVideoData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCssDemoVideo/${id}`)
        .then(res => res.json())
        .then(data => setCssDemoVideoData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosNumber = e => {
        const Number = e.target.value;
        const AddInfosCssDemoVideoData = {number:Number, videoName:CssDemoVideoData.videoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(AddInfosCssDemoVideoData);

        setCssDemoVideoData(AddInfosCssDemoVideoData);
    }
    const AddInfosVideoName = e => {
        const VideoName = e.target.value;
        const AddInfosCssDemoVideoData = {number:CssDemoVideoData.number, videoName:VideoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(AddInfosCssDemoVideoData);

        setCssDemoVideoData(AddInfosCssDemoVideoData);
    }
    const AddInfosVideoDuration = e => {
        const VideoDuration = e.target.value;
        const AddInfosCssDemoVideoData = {number:CssDemoVideoData.number, videoName:CssDemoVideoData.videoName, videoDuration:VideoDuration, videoDis:CssDemoVideoData.videoDis};
        console.log(AddInfosCssDemoVideoData);

        setCssDemoVideoData(AddInfosCssDemoVideoData);
    }
    const AddInfosVideoDis = e => {
        const VideoDis = e.target.value;
        const AddInfosCssDemoVideoData = {number:CssDemoVideoData.number, videoName:CssDemoVideoData.videoName, videoDuration:CssDemoVideoData.videoDuration, videoDis:VideoDis};
        console.log(AddInfosCssDemoVideoData);

        setCssDemoVideoData(AddInfosCssDemoVideoData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCssDemoVideo`, {
            method:"POST",
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
            <input type="text" onChange={AddInfosNumber} value={CssDemoVideoData.number || ""} />
            <input type="text" onChange={AddInfosVideoName} value={CssDemoVideoData.videoName || ""} />
            <input type="text" onChange={AddInfosVideoDuration} value={CssDemoVideoData.videoDuration || ""} />
            <input type="text" onChange={AddInfosVideoDis} value={CssDemoVideoData.videoDis || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCssDemoVideo;