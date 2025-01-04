import React, {useState, useEffect} from 'react';
import "./CoursesStartTime.css";
import thumbImg from "../../../../images/Home-img/course-thumbnails.png";
import ragistationStart from "../../../../images/courses/register.png";
import ragistationEnd from "../../../../images/courses/check.png";
import CourseStart from "../../../../images/courses/start-button.png";

const CoursesStartTime = () => {
    
    // course page courses Infos Dark Card
    const [CIDCCs, setCIDCCs] = useState([]);
  
    useEffect(()=>{
        fetch("https://magical-programmer-server-from-git.onrender.com/CIDCC")
        .then(res => res.json())
        .then(data => setCIDCCs(data))
    },[]);

    return (
        CIDCCs.map(CIDCC => <div className="CoursesStartTime">
            <div className="thumbImg">
                <img src={thumbImg} />
            </div>
            <div className="CoursesStartTime-text">
                <h1>
                    <b>
                        {CIDCC.headline}
                    </b>
                </h1>

                <br />

                <h3>
                    <img src={ragistationStart} className="icon-1-bg" /> 
                    {CIDCC.timeStart}
                </h3>
                <h3>
                    <img className="icon-2-bg" src={ragistationEnd} /> 
                    {CIDCC.timeEnd}
                </h3>
                <h3>
                    <img className="icon-3-bg" src={CourseStart} />
                    {CIDCC.classStart}
                </h3>

                <div className="start-line">
                    {CIDCC.StartBTNHeadline}
                    <br />
                <button className="CST-Course-SL-btn">{CIDCC.BTNText}</button>
                </div>
            </div>
        </div>
        )
    );
};

export default CoursesStartTime;