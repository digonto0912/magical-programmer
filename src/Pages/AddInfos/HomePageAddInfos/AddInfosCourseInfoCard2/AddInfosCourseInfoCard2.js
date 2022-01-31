import React,{useRef} from 'react';
import "./AddInfosCourseInfoCard2.css";

const UpdateCourseInfoCard2 = () => {

    const NameRef = useRef();
    const EmailRef = useRef();

    const submit = e => {
        e.preventDefault();
    }
    const submitBtn = e => {
        e.preventDefault();
    }

    return (
        <div className="updates-input-pages">
            <form onSubmit={submit}>
            <input type="text" ref={NameRef} placeholder="Name" />
            <input type="email" ref={EmailRef} placeholder="Email" />
            <input type="submit" onClick={submitBtn} placeholder="submit" />
            </form>
        </div>
    );
};

export default UpdateCourseInfoCard2;