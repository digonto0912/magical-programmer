import React,{useState, useEffect} from 'react';
import "./UpdateCIC3Card1stApi.css";
import {useParams} from "react-router";

const UpdateCIC3Card1stApi = () => {
    
    const [CIC3Card1stApiData, setCIC3Card1stApiData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateCIC3Card1stApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card1stApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateImg = e => {
        const img = e.target.value;
        const UpdateCIC3Card1stApiData = {img:img, headline:CIC3Card1stApiData.headline, reating:CIC3Card1stApiData.reating};
        console.log(UpdateCIC3Card1stApiData);

        setCIC3Card1stApiData(UpdateCIC3Card1stApiData);
    }
    const updateHeadline = e => {
        const headline = e.target.value;
        const UpdateCIC3Card1stApiData = {img:CIC3Card1stApiData.img, headline:headline, reating:CIC3Card1stApiData.reating};
        console.log(UpdateCIC3Card1stApiData);

        setCIC3Card1stApiData(UpdateCIC3Card1stApiData);
    }
    const updateReating = e => {
        const reating = e.target.value;
        const UpdateCIC3Card1stApiData = {img:CIC3Card1stApiData.img, headline:CIC3Card1stApiData.headline, reating:reating};
        console.log(UpdateCIC3Card1stApiData);

        setCIC3Card1stApiData(UpdateCIC3Card1stApiData);
    }
    
    const submit = e => {
        fetch(`http://localhost:2333/UpdateCIC3Card1stApi/${id}`, {
            method:"PUT",
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
            <input type="text" onChange={updateImg} value={CIC3Card1stApiData.img || ""} />
            <input type="text" onChange={updateHeadline} value={CIC3Card1stApiData.headline || ""} />
            <input type="text" onChange={updateReating} value={CIC3Card1stApiData.reating || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIC3Card1stApi;