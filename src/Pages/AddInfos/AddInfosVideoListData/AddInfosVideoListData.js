import React,{useState, useEffect} from 'react';
import "./AddInfosVideoListData.css";
import {useParams} from "react-router";

const AddInfosVideoListData = () => {
    
    const [VideoListData, setVideoListData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosVideoListData/${id}`)
        .then(res => res.json())
        .then(data => setVideoListData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosMilestoneId = e => {
        const milestoneId = e.target.value;
        const AddInfosVideoListData = {milestoneId:milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosHeadline = e => {
        const headline = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosTimeDuration = e => {
        const timeDuration = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosComplited = e => {
        const complited = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosImg = e => {
        const img = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosModuleCardsId = e => {
        const moduleCardsId = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosModuleCardName = e => {
        const moduleCardName = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:moduleCardName, videos:VideoListData.moduleCards.moduleCard.videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }
    const AddInfosVideos = e => {
        const videos = e.target.value;
        const AddInfosVideoListData = {milestoneId:VideoListData.milestoneId, headline:VideoListData.headline, timeDuration:VideoListData.timeDuration, complited:VideoListData.complited, img:VideoListData.img, moduleCardsId:VideoListData.moduleCards.moduleCardsId, moduleCardName:VideoListData.moduleCards.moduleCard.moduleCardName, videos:videos};
        console.log(AddInfosVideoListData);

        setVideoListData(AddInfosVideoListData);
    }

    //submite
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosVideoListData`, {
            method:"POST",
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
                <input type="text" onChange={AddInfosMilestoneId} value={VideoListData.milestoneId || ""} />
            </div>

            <input type="text" onChange={AddInfosHeadline} value={VideoListData.headline || ""} />
            <input type="text" onChange={AddInfosTimeDuration} value={VideoListData.timeDuration || ""} />
            <input type="text" onChange={AddInfosComplited} value={VideoListData.complited || ""} />
            <input type="text" onChange={AddInfosImg} value={VideoListData.img || ""} />
            
            {/* moduleCards */}
            
            <div>
                <p>
                    !important
                </p>
                <input type="text" onChange={AddInfosModuleCardsId} value={VideoListData.moduleCards.moduleCardsId || ""} />
            </div>

            {/* moduleCard */}

            <input type="text" onChange={AddInfosModuleCardName} value={VideoListData.moduleCards.moduleCard.moduleCardName || ""} />
            <input type="text" onChange={AddInfosVideos} value={VideoListData.moduleCards.moduleCard.videos || ""} />


            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosVideoListData;