import React from 'react';
import "./CoursesCardPage.css";

const CoursesCardPage = () => {
    return (
        <div>
<div className="CCP-nav-bg"></div>

<div className="CCP">
<h1>Welcome, <span className="name-color">Fardul Digonto</span> in this awesome Course</h1>
            <div className="CCP-card">
                <div className="CCP-card-img">
                    <img src="" alt="" />
                </div>
                <div className="CCP-card-textside">
                    <h2>Complete Web Development Course With Jhankar Mahbub</h2>
                    <h4>Fardul Digonto</h4>
                    <button><a href="/video">watch video</a></button>
                </div>
            </div>
        </div>
</div>
    );
};

export default CoursesCardPage;