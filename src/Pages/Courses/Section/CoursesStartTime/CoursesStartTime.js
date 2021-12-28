import React from 'react';
import "./CoursesStartTime.css";
import thumbImg from "../../../../images/Home-img/course-thumbnails.png";
import ragistationStart from "../../../../images/courses/register.png";
import ragistationEnd from "../../../../images/courses/check.png";
import CourseStart from "../../../../images/courses/start-button.png";

const CoursesStartTime = () => {
    return (
        <div className="CoursesStartTime">
            <div className="thumbImg">
                <img src={thumbImg} />
            </div>
            <div className="CoursesStartTime-text">
                <h1>
                    <b>
                        পরবর্তী ব্যাচের সময় সূচি
                    </b>
                </h1>

                <br />

                <h3>
                    <img src={ragistationStart} className="icon-1-bg" /> রেজিস্ট্রেশন শুরু: ডিসেম্বর ১০, ২০২১ (শুক্রবার)
                </h3>
                <h3>
                    <img className="icon-2-bg" src={ragistationEnd} /> রেজিস্ট্রেশন শেষ: ডিসেম্বর ২৪, ২০২১ (শুক্রবার)
                </h3>
                <h3>
                    <img className="icon-3-bg" src={CourseStart} /> ক্লাস শুরু: ডিসেম্বর ৩১, ২০২১(শুক্রবার)
                </h3>

                <div className="start-line">
                    তুমি ৫ম ব্যাচে এনরোল করতে আগ্রহি হলে, ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো
<br />
                <button className="CST-Course-SL-btn">start now</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesStartTime;