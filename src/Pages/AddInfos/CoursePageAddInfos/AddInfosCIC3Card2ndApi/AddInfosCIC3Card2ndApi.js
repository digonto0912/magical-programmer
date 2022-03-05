import React,{useState, useEffect} from 'react';
import "./AddInfosCIC3Card2ndApi.css";
import {useParams} from "react-router";

const AddInfosCIC3Card2ndApi = () => {
    
    const [CIC3Card2ndApiData, setCIC3Card2ndApiData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCIC3Card2ndApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card2ndApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosNum = e => {
        const num = e.target.value;
        const AddInfosCIC3Card2ndApiData = {num:num, texts:CIC3Card2ndApiData.texts};
        console.log(AddInfosCIC3Card2ndApiData);

        setCIC3Card2ndApiData(AddInfosCIC3Card2ndApiData);
    }
    const AddInfosTexts = e => {
        const texts = e.target.value;
        const AddInfosCIC3Card2ndApiData = {num:CIC3Card2ndApiData.num, texts:texts};
        console.log(AddInfosCIC3Card2ndApiData);

        setCIC3Card2ndApiData(AddInfosCIC3Card2ndApiData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCIC3Card2ndApi`, {
            method:"POST",
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
            <input type="text" onChange={AddInfosNum} value={CIC3Card2ndApiData.num || ""} />
            <input type="text" onChange={AddInfosTexts} value={CIC3Card2ndApiData.texts || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCIC3Card2ndApi;