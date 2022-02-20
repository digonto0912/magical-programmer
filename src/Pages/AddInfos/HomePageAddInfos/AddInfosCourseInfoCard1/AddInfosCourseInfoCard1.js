import React,{useState, useEffect} from 'react';
import "./AddInfosCourseInfoCard1.css";
import {useParams} from "react-router";

const AddInfosCourseInfoCard1 = () => {
    
    const [CourseInfoCard1, setCourseInfoCard1] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/AddInfosCourseInfoCard1/${id}`)
        .then(res => res.json())
        .then(data => setCourseInfoCard1(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosNumber = e => {
        const number = e.target.value;
        const AddInfosCourseInfoCard1 = {number:number, CInfo:CourseInfoCard1.CInfo, lvl:CourseInfoCard1.lvl};
        console.log(AddInfosCourseInfoCard1);

        setCourseInfoCard1(AddInfosCourseInfoCard1);
    }
    const AddInfosCInfo = e => {
        const CInfo = e.target.value;
        const AddInfosCourseInfoCard1 = {number:CourseInfoCard1.number, CInfo:CInfo, lvl:CourseInfoCard1.lvl};
        console.log(AddInfosCourseInfoCard1);

        setCourseInfoCard1(AddInfosCourseInfoCard1);
    }
    const AddInfoslvl = e => {
        const lvl = e.target.value;
        const AddInfosCourseInfoCard1 = {number:CourseInfoCard1.number, CInfo:CourseInfoCard1.CInfo, lvl:lvl};
        console.log(AddInfosCourseInfoCard1);

        setCourseInfoCard1(AddInfosCourseInfoCard1);
    }
    
    const submit = e => {
        fetch(`http://localhost:2333/AddInfosCourseInfoCard1`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CourseInfoCard1)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        number: {CourseInfoCard1.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={AddInfosNumber} value={CourseInfoCard1.number || ""} />
            <input type="text" onChange={AddInfosCInfo} value={CourseInfoCard1.CInfo || ""} />
            <input type="text" onChange={AddInfoslvl} value={CourseInfoCard1.lvl || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCourseInfoCard1;