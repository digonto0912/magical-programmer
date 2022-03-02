import React,{useState, useEffect} from 'react';
import "./AddInfosCIDCH.css";
import {useParams} from "react-router";

const AddInfosCIDCH = () => {
    
    const [CIDCHData, setCIDCHData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosCIDCH/${id}`)
        .then(res => res.json())
        .then(data => setCIDCHData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const addinfosHeadline = e => {
        const headline = e.target.value;
        const AddInfosCIDCHData = {headline:headline, subline:CIDCHData.subline, img:CIDCHData.img};
        console.log(AddInfosCIDCHData);

        setCIDCHData(AddInfosCIDCHData);
    }
    const addinfossubline = e => {
        const subline = e.target.value;
        const AddInfosCIDCHData = {headline:CIDCHData.headline, subline:subline, img:CIDCHData.img};
        console.log(AddInfosCIDCHData);

        setCIDCHData(AddInfosCIDCHData);
    }
    const addinfosImg = e => {
        const img = e.target.value;
        const AddInfosCIDCHData = {headline:CIDCHData.headline, subline:CIDCHData.subline, img:img};
        console.log(AddInfosCIDCHData);

        setCIDCHData(AddInfosCIDCHData);
    }

    
    //submit
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosCIDCH/${id}`, {
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
            <input type="text" onChange={addinfosHeadline} value={CIDCHData.headline || ""} />
            <input type="text" onChange={addinfossubline} value={CIDCHData.subline || ""} />
            <input type="text" onChange={addinfosImg} value={CIDCHData.img || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCIDCH;