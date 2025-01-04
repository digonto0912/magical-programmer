import React,{useState, useEffect} from 'react';
import "./AddInfosCourseInfoCard2.css";
import {useParams} from "react-router";

const AddInfosCourseInfoCard2 = () => {
    
    const [CourseInfoCard2, setCourseInfoCard2] = useState([]);

    useEffect(()=>{
        fetch(`https://magical-programmer-server-from-git.onrender.com/AddInfosCourseInfoCard2/${id}`)
        .then(res => res.json())
        .then(data => setCourseInfoCard2(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const AddInfosNumber = e => {
        const number = e.target.value;
        const AddInfosCourseInfoCard2 = {number:number, CInfo:CourseInfoCard2.CInfo, lvl:CourseInfoCard2.lvl};
        console.log(AddInfosCourseInfoCard2);

        setCourseInfoCard2(AddInfosCourseInfoCard2);
    }
    const AddInfosCInfo = e => {
        const CInfo = e.target.value;
        const AddInfosCourseInfoCard2 = {number:CourseInfoCard2.number, CInfo:CInfo, lvl:CourseInfoCard2.lvl};
        console.log(AddInfosCourseInfoCard2);

        setCourseInfoCard2(AddInfosCourseInfoCard2);
    }
    const AddInfoslvl = e => {
        const lvl = e.target.value;
        const AddInfosCourseInfoCard2 = {number:CourseInfoCard2.number, CInfo:CourseInfoCard2.CInfo, lvl:lvl};
        console.log(AddInfosCourseInfoCard2);

        setCourseInfoCard2(AddInfosCourseInfoCard2);
    }
    
    const submit = e => {
        fetch(`https://magical-programmer-server-from-git.onrender.com/AddInfosCourseInfoCard2`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CourseInfoCard2)
        })
        .then(res => res.json())
        .then(data => data)

        e.preventDefault();
    }

    
    return (
        <div className="updates-input-pages">
        <h1 className="text-align-center">
        number: {CourseInfoCard2.number}
        </h1>
            <form onSubmit={submit}>
            <input type="text" onChange={AddInfosNumber} value={CourseInfoCard2.number || ""} />
            <input type="text" onChange={AddInfosCInfo} value={CourseInfoCard2.CInfo || ""} />
            <input type="text" onChange={AddInfoslvl} value={CourseInfoCard2.lvl || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default AddInfosCourseInfoCard2;