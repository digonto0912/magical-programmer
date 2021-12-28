import React from 'react';
import "./ToolsDemos.css";
import reactJs from "../../../../images/Home-img/react-js.svg";
import bootstrap4 from "../../../../images/Home-img/bootstrap-4.svg";
import figma from "../../../../images/Home-img/figma.svg";
import materialUi from "../../../../images/Home-img/material-ui.svg";
import mongodb from "../../../../images/Home-img/mongodb.svg";
import tailwind from "../../../../images/Home-img/tailwind-css.svg";

const Courses = () => {
    return (
        <div className="courses">

                {/* text */}
                <div className="CTD">
                    <div className="CTDD">
                    <h4 className="CTime">
                        120 HOURS OF COURSES
                    </h4>
                    <h2>
                        Learn the best tools and platforms
                    </h2>
                    <h4 className="icons-side-text">
                            We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.
                    </h4>
                    </div>


                        <div className="icons">
                            <img src={reactJs} className="reactJs" />
                            <img src={tailwind} className="tailwind" />
                            <img src={figma} className="figma" />
                            <img src={bootstrap4} className="bootstrap4" />
                            <img src={materialUi} className="materialUi" />
                            <img src={mongodb} className="mongodb" />
                        </div>


                {/* input search */}
                <form>
                    <input
                     className="CS-search-input"
                     type="search" 
                     name="search" 
                     id="learning-skills-search"
                     placeholder="Search"
                     />
                </form>

                </div>
            </div>
    );
};

export default Courses;