import React,{useState, useEffect} from 'react';
import "./AddInfosCIDCC.css";
import {useParams} from "react-router";

const AddInfosCIDCC = () => {
    
    const [CIDCCData, setCIDCCData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosCIDCC/${id}`)
        .then(res => res.json())
        .then(data => setCIDCCData(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const addinfosHeadline = e => {
        const headline = e.target.value;
        const AddInfosCIDCCData = {headline:headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosTimeStart = e => {
        const timeStart = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosImg = e => {
        const img = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosTimeEnd = e => {
        const timeEnd = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosClassStart = e => {
        const classStart = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosStartBTNHeadline = e => {
        const StartBTNHeadline = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:StartBTNHeadline, BTNText:CIDCCData.BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }
    const addinfosBTNText = e => {
        const BTNText = e.target.value;
        const AddInfosCIDCCData = {headline:CIDCCData.headline, timeStart:CIDCCData.timeStart, img:CIDCCData.img, timeEnd:CIDCCData.timeEnd, classStart:CIDCCData.classStart, StartBTNHeadline:CIDCCData.StartBTNHeadline, BTNText:BTNText};
        console.log(AddInfosCIDCCData);

        setCIDCCData(AddInfosCIDCCData);
    }

    
    //submit
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosCIDCC/${id}`, {
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
            <input type="text" onChange={addinfosImg} value={CIDCCData.img || ""} />
            <input type="text" onChange={addinfosHeadline} value={CIDCCData.headline || ""} />
            <input type="text" onChange={addinfosTimeStart} value={CIDCCData.timeStart || ""} />
            <input type="text" onChange={addinfosTimeEnd} value={CIDCCData.timeEnd || ""} />
            <input type="text" onChange={addinfosClassStart} value={CIDCCData.classStart || ""} />
            <input type="text" onChange={addinfosStartBTNHeadline} value={CIDCCData.StartBTNHeadline || ""} />
            <input type="text" onChange={addinfosBTNText} value={CIDCCData.BTNText || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCIDCC;