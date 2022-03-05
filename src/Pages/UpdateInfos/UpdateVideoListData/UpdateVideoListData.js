import React,{useState, useEffect} from 'react';
import "./UpdateVideoListData.css";
import {useParams} from "react-router";

const UpdateVideoListData = () => {
    
    const [VideoListData, setVideoListData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateVideoListData/${id}`)
        .then(res => res.json())
        .then(data => setVideoListData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateMilestoneId = e => {
        const milestoneId = e.target.value;
        const UpdateVideoListData = {milestoneId:milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateHeadline = e => {
        const headline = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateTimeDuration = e => {
        const timeDuration = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateComplited = e => {
        const complited = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateImg = e => {
        const img = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateModuleCardsId = e => {
        const moduleCardsId = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateModuleCardName = e => {
        const moduleCardName = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }
    const updateVideos = e => {
        const videos = e.target.value;
        const UpdateVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:videos};
        console.log(UpdateVideoListData);

        setVideoListData(UpdateVideoListData);
    }

    //submite
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateVideoListData/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(VideoListData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {VideoListData.number}
        </h1>
            <form onSubmit={submit}>
            
            {/* milestone */}
            
            <div>
                <p>
                    !important
                </p>
                <input type="text" onChange={updateMilestoneId} value={VideoListData.milestoneId || ""} />
            </div>

            <input type="text" onChange={updateHeadline} value={VideoListData.headline || ""} />
            <input type="text" onChange={updateTimeDuration} value={VideoListData.timeDuration || ""} />
            <input type="text" onChange={updateComplited} value={VideoListData.complited || ""} />
            <input type="text" onChange={updateImg} value={VideoListData.img || ""} />
            
            {/* moduleCards */}
            
            <div>
                <p>
                    !important
                </p>
                <input type="text" onChange={updateModuleCardsId} value={VideoListData.moduleCards.moduleCardsId || ""} />
            </div>

            {/* moduleCard */}

            <input type="text" onChange={updateModuleCardName} value={VideoListData.moduleCards.moduleCard.moduleCardName || ""} />
            <input type="text" onChange={updateVideos} value={VideoListData.moduleCards.moduleCard.videos || ""} />


            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateVideoListData;