import React,{useState, useEffect} from 'react';
import "./UpdateCIDCH.css";
import {useParams} from "react-router";

const UpdateCIDCH = () => {
    
    const [CIDCHData, setCIDCHData] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIDCH/${id}`)
        .then(res => res.json())
        .then(data => setCIDCHData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateHeadline = e => {
        const headline = e.target.value;
        const UpdateCIDCHData = {headline:headline, subline:CIDCHData.subline, img:CIDCHData.img};
        console.log(UpdateCIDCHData);

        setCIDCHData(UpdateCIDCHData);
    }
    const updatesubline = e => {
        const subline = e.target.value;
        const UpdateCIDCHData = {headline:CIDCHData.headline, subline:subline, img:CIDCHData.img};
        console.log(UpdateCIDCHData);

        setCIDCHData(UpdateCIDCHData);
    }
    const updateImg = e => {
        const img = e.target.value;
        const UpdateCIDCHData = {headline:CIDCHData.headline, subline:CIDCHData.subline, img:img};
        console.log(UpdateCIDCHData);

        setCIDCHData(UpdateCIDCHData);
    }

    
    //submit
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIDCH/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CIDCHData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {CIDCHData.Img}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateHeadline} value={CIDCHData.headline || ""} />
            <input type="text" onChange={updatesubline} value={CIDCHData.subline || ""} />
            <input type="text" onChange={updateImg} value={CIDCHData.img || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIDCH;