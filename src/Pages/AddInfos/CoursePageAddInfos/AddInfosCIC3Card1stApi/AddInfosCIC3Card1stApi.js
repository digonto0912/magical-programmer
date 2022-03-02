import React,{useState, useEffect} from 'react';
import "./AddInfosCIC3Card1stApi.css";
import {useParams} from "react-router";

const AddInfosCIC3Card1stApi = () => {
    
    const [CIC3Card1stApiData, setCIC3Card1stApiData] = useState([]);    
    const [image, setImage] = useState(null);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosHeadline = e => {
        const headline = e.target.value;
        const AddInfosCIC3Card1stApiData = {headline:headline, reating:CIC3Card1stApiData.reating};
        console.log(AddInfosCIC3Card1stApiData);

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    const AddInfosReating = e => {
        const reating = e.target.value;
        const AddInfosCIC3Card1stApiData = {headline:CIC3Card1stApiData.headline, reating:reating};
        console.log(AddInfosCIC3Card1stApiData);

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    const AddInfosColorId = e => {
        const colorId = e.target.value;
        const AddInfosCIC3Card1stApiData = {headline:CIC3Card1stApiData.headline, reating:CIC3Card1stApiData.reating, colorId:colorId};

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    
    const submit = e => {

        e.preventDefault();

        if(!image){
            return
        }

        const formData = new FormData();
        formData.append("headline", CIC3Card1stApiData.headline);
        formData.append("reating", CIC3Card1stApiData.reating);
        formData.append("colorId", CIC3Card1stApiData.colorId);
        formData.append("img", image);
        console.log(image);

        fetch(`http://localhost:2333/AddInfosCIC3Card1stApi`, {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => data)

    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        headline: {CIC3Card1stApiData.headline}
        </h1>
        <form onSubmit={submit}>
            <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} />
            <input type="text" onChange={AddInfosHeadline} placeholder="Headline" />
            <input type="text" onChange={AddInfosReating} placeholder="Reating" />
            <input type="text" onChange={AddInfosColorId} placeholder="Blog card id" />

            <input type="submit" placeholder="submit" />
        </form>
        </div>
    );
};

export default AddInfosCIC3Card1stApi;