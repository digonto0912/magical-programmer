import React,{useState, useEffect} from 'react';
import "./AddInfosHtmlDemoVideo.css";
import {useParams} from "react-router";

const AddInfosHtmlDemoVideo = () => {
    
    const [HtmlDemoVideoData, setHtmlDemoVideoData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosHtmlDemoVideo/${id}`)
        .then(res => res.json())
        .then(data => setHtmlDemoVideoData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosNumber = e => {
        const Number = e.target.value;
        const AddInfosHtmlDemoVideoData = {number:Number, videoName:HtmlDemoVideoData.videoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(AddInfosHtmlDemoVideoData);

        setHtmlDemoVideoData(AddInfosHtmlDemoVideoData);
    }
    const AddInfosVideoName = e => {
        const VideoName = e.target.value;
        const AddInfosHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:VideoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(AddInfosHtmlDemoVideoData);

        setHtmlDemoVideoData(AddInfosHtmlDemoVideoData);
    }
    const AddInfosVideoDuration = e => {
        const VideoDuration = e.target.value;
        const AddInfosHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:HtmlDemoVideoData.videoName, videoDuration:VideoDuration, videoDis:HtmlDemoVideoData.videoDis};
        console.log(AddInfosHtmlDemoVideoData);

        setHtmlDemoVideoData(AddInfosHtmlDemoVideoData);
    }
    const AddInfosVideoDis = e => {
        const VideoDis = e.target.value;
        const AddInfosHtmlDemoVideoData = {number:HtmlDemoVideoData.number, videoName:HtmlDemoVideoData.videoName, videoDuration:HtmlDemoVideoData.videoDuration, videoDis:VideoDis};
        console.log(AddInfosHtmlDemoVideoData);

        setHtmlDemoVideoData(AddInfosHtmlDemoVideoData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosHtmlDemoVideo`, {
            method:"POST",
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
            <input type="text" onChange={AddInfosNumber} value={HtmlDemoVideoData.number || ""} />
            <input type="text" onChange={AddInfosVideoName} value={HtmlDemoVideoData.videoName || ""} />
            <input type="text" onChange={AddInfosVideoDuration} value={HtmlDemoVideoData.videoDuration || ""} />
            <input type="text" onChange={AddInfosVideoDis} value={HtmlDemoVideoData.videoDis || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosHtmlDemoVideo;