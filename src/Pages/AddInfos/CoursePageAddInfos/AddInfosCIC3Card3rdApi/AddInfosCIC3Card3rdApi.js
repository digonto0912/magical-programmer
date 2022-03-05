import React,{useState, useEffect} from 'react';
import "./AddInfosCIC3Card3rdApi.css";
import {useParams} from "react-router";

const AddInfosCIC3Card3rdApi = () => {
    
    const [CIC3Card3rdApiData, setCIC3Card3rdApiData] = useState([]);

    useEffect(()=>{
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCIC3Card3rdApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card3rdApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosImg = e => {
        const img = e.target.value;
        const AddInfosCIC3Card3rdApiData = {img:img, whatYouLearn:CIC3Card3rdApiData.whatYouLearn, link:CIC3Card3rdApiData.link};
        console.log(AddInfosCIC3Card3rdApiData);

        setCIC3Card3rdApiData(AddInfosCIC3Card3rdApiData);
    }
    const AddInfosWhatYouLearn = e => {
        const whatYouLearn = e.target.value;
        const AddInfosCIC3Card3rdApiData = {img:CIC3Card3rdApiData.img, whatYouLearn:whatYouLearn, link:CIC3Card3rdApiData.link};
        console.log(AddInfosCIC3Card3rdApiData);

        setCIC3Card3rdApiData(AddInfosCIC3Card3rdApiData);
    }
    const AddInfosLink = e => {
        const link = e.target.value;
        const AddInfosCIC3Card3rdApiData = {img:CIC3Card3rdApiData.img, whatYouLearn:CIC3Card3rdApiData.whatYouLearn, link:link};
        console.log(AddInfosCIC3Card3rdApiData);

        setCIC3Card3rdApiData(AddInfosCIC3Card3rdApiData);
    }
    
    const submit = e => {
        fetch(`https://blooming-island-64834.herokuapp.com/AddInfosCIC3Card3rdApi`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CIC3Card3rdApiData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        whatYouLearn: {CIC3Card3rdApiData.whatYouLearn}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={AddInfosImg} value={CIC3Card3rdApiData.img || ""} />
            <input type="text" onChange={AddInfosWhatYouLearn} value={CIC3Card3rdApiData.whatYouLearn || ""} />
            <input type="text" onChange={AddInfosLink} value={CIC3Card3rdApiData.link || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCIC3Card3rdApi;