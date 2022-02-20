import React,{useState, useEffect} from 'react';
import "./UpdateCourseInfoCard2.css";
import {useParams} from "react-router";

const UpdateCourseInfoCard2 = () => {
    
    const [CourseInfoCard2, setCourseInfoCard2] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateCourseInfoCard2/${id}`)
        .then(res => res.json())
        .then(data => setCourseInfoCard2(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateNumber = e => {
        const number = e.target.value;
        const UpdateCourseInfoCard2 = {number:number, CInfo:CourseInfoCard2.CInfo, lvl:CourseInfoCard2.lvl};
        console.log(UpdateCourseInfoCard2);

        setCourseInfoCard2(UpdateCourseInfoCard2);
    }
    const updateCInfo = e => {
        const CInfo = e.target.value;
        const UpdateCourseInfoCard2 = {number:CourseInfoCard2.number, CInfo:CInfo, lvl:CourseInfoCard2.lvl};
        console.log(UpdateCourseInfoCard2);

        setCourseInfoCard2(UpdateCourseInfoCard2);
    }
    const updatelvl = e => {
        const lvl = e.target.value;
        const UpdateCourseInfoCard2 = {number:CourseInfoCard2.number, CInfo:CourseInfoCard2.CInfo, lvl:lvl};
        console.log(UpdateCourseInfoCard2);

        setCourseInfoCard2(UpdateCourseInfoCard2);
    }
    
    const submit = e => {
        fetch(`http://localhost:2333/UpdateCourseInfoCard2/${id}`, {
            method:"PUT",
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
            <input type="text" onChange={updateNumber} value={CourseInfoCard2.number || ""} />
            <input type="text" onChange={updateCInfo} value={CourseInfoCard2.CInfo || ""} />
            <input type="text" onChange={updatelvl} value={CourseInfoCard2.lvl || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCourseInfoCard2;