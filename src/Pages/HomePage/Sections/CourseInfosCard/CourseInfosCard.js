import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import "./CourseInfosCard.css" ;

const CourseInfosCard = () => {

    const [corse1Infos, setcorse1Infos] = useState([]);
    const [corse2Infos, setcorse2Infos] = useState([]);

    useEffect(()=>{
        fetch("https://blooming-island-64834.herokuapp.com/CourseInfosApi1")
        .then(res => res.json())
        .then(data => setcorse1Infos(data))
    },[])

    useEffect(()=>{
        fetch("https://blooming-island-64834.herokuapp.com/CourseInfosApi2")
        .then(res => res.json())
        .then(data => setcorse2Infos(data))
    },[])

    return (
        <div className="CIC">
            <div className="CIC-text">
                <h5 className="CIC-div-headline">COURSES INFO</h5>
                <h1>Tutorials to guide you beyond</h1>
                <h5>
                    Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge
                </h5>
                <Link to="/courses">
                <button className="CIC-button">
                    Enroll now
                </button>
                </Link>
            </div>

            <div className="info-cards">
                
                {/* card 1 */}

                <div className="info-card">
                    <div className="info-up-card">
                        <h3>Course Advantage</h3>
                    <h5>
                        2 benefits to the full course
                    </h5>
                    {
                        corse1Infos.map(corse1Info => <>
                        <div className="infos">
                            <div className="info-number">{corse1Info.number}</div>
                            <div>{corse1Info.CInfo}</div>
                            <div className="info-lvl">{corse1Info?.lvl}</div>
                        </div>
                        </>)
                    }
                    
                    </div>
                    <div className="up-div-of-info-down-card-1st">
                        <div className="info-down-card-1st"></div>
                    </div>
                </div>
                
                {/* card 2 */}

                <div className="info-card">
                    <div className="info-up-card">
                        <h3>Course Advantage</h3>
                        <h5>
                            2 main targets to the full course
                        </h5>
                    {
                        corse2Infos.map(corse2Info => <>
                        <div className="infos">
                            <div className="info-number">{corse2Info.number}</div>
                            <div>{corse2Info.CInfo}</div>
                            <div className="info-lvl">{corse2Info?.lvl}</div>
                        </div>
                        </>)
                    }
                </div>
                <div className="up-div-of-info-down-card-2nd">
                    <div className="info-down-card-2nd"></div>
                </div>

                </div>

            </div>
        </div>
    );
};

export default CourseInfosCard;