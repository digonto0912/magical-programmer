import React from 'react';
import "./Courses.css";
import CoursesBanner from "./Section/CoursesBanner/CoursesBanner" ;
import CoursesStartTime from "./Section/CoursesStartTime/CoursesStartTime" ;
import CoursesInfoCards from "./Section/CoursesInfoCards/CoursesInfoCards" ;

const Courses = () => {
    return (
        <div>
            <CoursesBanner />

            {/* bottom svg */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="dwn-svg"><path fill="#5139d6" fill-opacity="1" d="M0,96L17.1,112C34.3,128,69,160,103,176C137.1,192,171,192,206,197.3C240,203,274,213,309,181.3C342.9,149,377,75,411,58.7C445.7,43,480,85,514,101.3C548.6,117,583,107,617,128C651.4,149,686,203,720,197.3C754.3,192,789,128,823,133.3C857.1,139,891,213,926,256C960,299,994,309,1029,288C1062.9,267,1097,213,1131,165.3C1165.7,117,1200,75,1234,53.3C1268.6,32,1303,32,1337,42.7C1371.4,53,1406,75,1423,85.3L1440,96L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>

            <CoursesStartTime />
            <CoursesInfoCards />
        </div>
    );
};

export default Courses;