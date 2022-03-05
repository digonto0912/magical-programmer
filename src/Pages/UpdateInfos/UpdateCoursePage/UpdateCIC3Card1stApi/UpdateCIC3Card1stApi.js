import React,{useState, useEffect} from 'react';
import "./UpdateCIC3Card1stApi.css";
import {useParams} from "react-router";

const UpdateCIC3Card1stApi = () => {
    
    const [CIC3Card1stApiData, setCIC3Card1stApiData] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/UpdateCIC3Card1stApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card1stApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateHeadline = e => {
        const headline = e.target.value;
        const UpdateCIC3Card1stApiData = {headline:headline, reating:CIC3Card1stApiData.reating, colorId:CIC3Card1stApiData.colorId};

        setCIC3Card1stApiData(UpdateCIC3Card1stApiData);
    }
    const updateReating = e => {
        const reating = e.target.value;
        const UpdateCIC3Card1stApiData = {headline:CIC3Card1stApiData.headline, reating:reating, colorId:CIC3Card1stApiData.colorId};

        setCIC3Card1stApiData(UpdateCIC3Card1stApiData);
    }
    const updateColorId = e => {
        const colorId = e.target.value;
        const UpdateBlogCardData = {headline:CIC3Card1stApiData.headline, reating:CIC3Card1stApiData.reating, colorId:colorId};

        setCIC3Card1stApiData(UpdateBlogCardData);
    }
    
    const submit = e => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("headline", CIC3Card1stApiData.headline);
        formData.append("reating", CIC3Card1stApiData.reating);
        formData.append("colorId", CIC3Card1stApiData.colorId);
        formData.append("img", image);
        console.log(image);


        fetch(`https://blooming-island-64834.herokuapp.com/UpdateCIC3Card1stApi/${id}`, {
            method:"PUT",
            body: formData
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        headline: {CIC3Card1stApiData.headline}
        </h1>
            <form onSubmit={submit}>
            <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} />
            <input type="text" onChange={updateHeadline} value={CIC3Card1stApiData.headline || ""} />
            <input type="text" onChange={updateReating} value={CIC3Card1stApiData.reating || ""} />
            <input type="text" onChange={updateColorId} value={CIC3Card1stApiData.colorId || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIC3Card1stApi;