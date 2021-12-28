import React from 'react';
import "./HomePage.css";
import HomeBanner from "./Sections/HomeBanner/HomeBanner";
import CourseInroleCard from "./Sections/CourseInroleCard/CourseInroleCard";
import ToolsDemos from "./Sections/ToolsDemos/ToolsDemos";
import DemoVideoCards from "./Sections/DemoVideoCards/DemoVideoCards";
import BlogsCards from "./Sections/BlogsCards/BlogsCards";
import CourseInfosCard from "./Sections/CourseInfosCard/CourseInfosCard";

const HomePage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CourseInroleCard></CourseInroleCard>
            <ToolsDemos></ToolsDemos>
            <DemoVideoCards></DemoVideoCards>
            <BlogsCards></BlogsCards>
            <CourseInfosCard></CourseInfosCard>
        </div>
    );
};

export default HomePage;