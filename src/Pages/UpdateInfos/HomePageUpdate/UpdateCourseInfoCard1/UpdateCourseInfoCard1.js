import React,{useState, useEffect} from 'react';
import "./UpdateCourseInfoCard1.css";
import {useParams} from "react-router";

const UpdateCourseInfoCard1 = () => {
    
    const [CourseInfoCard1, setCourseInfoCard1] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:2333/UpdateCourseInfoCard1/${id}`)
        .then(res => res.json())
        .then(data => setCourseInfoCard1(data))
    }, []);
    
    // params
    const {id} = useParams();
    
    // function

    const updateNumber = e => {
        const number = e.target.value;
        const UpdateCourseInfoCard1 = {number:number, CInfo:CourseInfoCard1.CInfo, lvl:CourseInfoCard1.lvl};
        console.log(UpdateCourseInfoCard1);

        setCourseInfoCard1(UpdateCourseInfoCard1);
    }
    const updateCInfo = e => {
        const CInfo = e.target.value;
        const UpdateCourseInfoCard1 = {number:CourseInfoCard1.number, CInfo:CInfo, lvl:CourseInfoCard1.lvl};
        console.log(UpdateCourseInfoCard1);

        setCourseInfoCard1(UpdateCourseInfoCard1);
    }
    const updatelvl = e => {
        const lvl = e.target.value;
        const UpdateCourseInfoCard1 = {number:CourseInfoCard1.number, CInfo:CourseInfoCard1.CInfo, lvl:lvl};
        console.log(UpdateCourseInfoCard1);

        setCourseInfoCard1(UpdateCourseInfoCard1);
    }
    
    const submit = e => {
        fetch(`http://localhost:2333/UpdateCourseInfoCard1/${id}`, {
            method:"PUT",
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
            <input type="text" onChange={updateNumber} value={CourseInfoCard1.number || ""} />
            <input type="text" onChange={updateCInfo} value={CourseInfoCard1.CInfo || ""} />
            <input type="text" onChange={updatelvl} value={CourseInfoCard1.lvl || ""} />

            <input type="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCourseInfoCard1;