import React,{useState, useEffect} from 'react';
import "./AddInfosCIC3Card1stApi.css";
import {useParams} from "react-router";

const AddInfosCIC3Card1stApi = () => {
    
    const [CIC3Card1stApiData, setCIC3Card1stApiData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosCIC3Card1stApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card1stApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosImg = e => {
        const img = e.target.value;
        const AddInfosCIC3Card1stApiData = {img:img, headline:CIC3Card1stApiData.headline, reating:CIC3Card1stApiData.reating};
        console.log(AddInfosCIC3Card1stApiData);

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    const AddInfosHeadline = e => {
        const headline = e.target.value;
        const AddInfosCIC3Card1stApiData = {img:CIC3Card1stApiData.img, headline:headline, reating:CIC3Card1stApiData.reating};
        console.log(AddInfosCIC3Card1stApiData);

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    const AddInfosReating = e => {
        const reating = e.target.value;
        const AddInfosCIC3Card1stApiData = {img:CIC3Card1stApiData.img, headline:CIC3Card1stApiData.headline, reating:reating};
        console.log(AddInfosCIC3Card1stApiData);

        setCIC3Card1stApiData(AddInfosCIC3Card1stApiData);
    }
    
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosCIC3Card1stApi`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CIC3Card1stApiData)
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
            <input type="text" onChange={AddInfosImg} value={CIC3Card1stApiData.img || ""} />
            <input type="text" onChange={AddInfosHeadline} value={CIC3Card1stApiData.headline || ""} />
            <input type="text" onChange={AddInfosReating} value={CIC3Card1stApiData.reating || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCIC3Card1stApi;