import React,{useState, useEffect} from 'react';
import "./UpdateCIDCC.css";
import {useParams} from "react-router";

const UpdateCIDCC = () => {
    
    const [CIDCCData, setCIDCCData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateCIDCC/${id}`)
        .then(res => res.json())
        .then(data => setCIDCCData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateHeadline = e => {
        const headline = e.target.value;
        const UpdateCIDCCData = {headline:headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateTimeStart = e => {
        const timeStart = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateImg = e => {
        const img = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateTimeEnd = e => {
        const timeEnd = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateClassStart = e => {
        const classStart = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateStartBTNHeadline = e => {
        const StartBTNHeadline = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }
    const updateBTNText = e => {
        const BTNText = e.target.value;
        const UpdateCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:BTNText};
        console.log(UpdateCIDCCData);

        setCIDCCData(UpdateCIDCCData);
    }

    
    //submit
    const submit = e => {
        fetch(`http://localhost:2333/UpdateCIDCC/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CIDCCData)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        Name: {CIDCCData.Img}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={updateImg} value={CIDCCData.img || ""} />
            <input type="text" onChange={updateHeadline} value={CIDCCData.headline || ""} />
            <input type="text" onChange={updateTimeStart} value={CIDCCData.timeStart || ""} />
            <input type="text" onChange={updateTimeEnd} value={CIDCCData.timeEnd || ""} />
            <input type="text" onChange={updateClassStart} value={CIDCCData.classStart || ""} />
            <input type="text" onChange={updateStartBTNHeadline} value={CIDCCData.StartBTNHeadline || ""} />
            <input type="text" onChange={updateBTNText} value={CIDCCData.BTNText || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCIDCC;