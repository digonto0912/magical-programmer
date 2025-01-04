import React,{useState, useEffect} from 'react';
import "./UpdateCIC3Card2ndApi.css";
import {useParams} from "react-router";

const UpdateCIC3Card2ndApi = () => {
    
    const [CIC3Card2ndApiData, setCIC3Card2ndApiData] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIC3Card2ndApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card2ndApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateNum = e => {
        const num = e.target.value;
        const UpdateCIC3Card2ndApiData = {num:num, texts:CIC3Card2ndApiData.texts};
        console.log(UpdateCIC3Card2ndApiData);

        setCIC3Card2ndApiData(UpdateCIC3Card2ndApiData);
    }
    const updateTexts = e => {
        const texts = e.target.value;
        const UpdateCIC3Card2ndApiData = {num:CIC3Card2ndApiData.num, texts:texts};
        console.log(UpdateCIC3Card2ndApiData);

        setCIC3Card2ndApiData(UpdateCIC3Card2ndApiData);
    }
    
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIC3Card2ndApi/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CIC3Card2ndApiData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        num: {CIC3Card2ndApiData.num}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateNum} value={CIC3Card2ndApiData.num || ""} />
            <input type="text" onChange={updateTexts} value={CIC3Card2ndApiData.texts || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIC3Card2ndApi;