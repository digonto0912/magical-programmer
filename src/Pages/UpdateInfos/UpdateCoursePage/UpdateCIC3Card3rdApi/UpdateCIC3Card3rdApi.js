import React,{useState, useEffect} from 'react';
import "./UpdateCIC3Card3rdApi.css";
import {useParams} from "react-router";

const UpdateCIC3Card3rdApi = () => {
    
    const [CIC3Card3rdApiData, setCIC3Card3rdApiData] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIC3Card3rdApi/${id}`)
        .then(res => res.json())
        .then(data => setCIC3Card3rdApiData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateImg = e => {
        const img = e.target.value;
        const UpdateCIC3Card3rdApiData = {img:img, whatYouLearn:CIC3Card3rdApiData.whatYouLearn, link:CIC3Card3rdApiData.link};
        console.log(UpdateCIC3Card3rdApiData);

        setCIC3Card3rdApiData(UpdateCIC3Card3rdApiData);
    }
    const updateWhatYouLearn = e => {
        const whatYouLearn = e.target.value;
        const UpdateCIC3Card3rdApiData = {img:CIC3Card3rdApiData.img, whatYouLearn:whatYouLearn, link:CIC3Card3rdApiData.link};
        console.log(UpdateCIC3Card3rdApiData);

        setCIC3Card3rdApiData(UpdateCIC3Card3rdApiData);
    }
    const updateLink = e => {
        const link = e.target.value;
        const UpdateCIC3Card3rdApiData = {img:CIC3Card3rdApiData.img, whatYouLearn:CIC3Card3rdApiData.whatYouLearn, link:link};
        console.log(UpdateCIC3Card3rdApiData);

        setCIC3Card3rdApiData(UpdateCIC3Card3rdApiData);
    }
    
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/UpdateCIC3Card3rdApi/${id}`, {
            method:"PUT",
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
            <input type="text" onChange={updateImg} value={CIC3Card3rdApiData.img || ""} />
            <input type="text" onChange={updateWhatYouLearn} value={CIC3Card3rdApiData.whatYouLearn || ""} />
            <input type="text" onChange={updateLink} value={CIC3Card3rdApiData.link || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIC3Card3rdApi;