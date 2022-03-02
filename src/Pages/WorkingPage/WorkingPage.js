import React from 'react';
import './WorkingPage.css';
import WorkingImg from "./../../images/WorkingPage/Working.svg";

const WorkingPage = () => {
    return (
        <div className="WorkingPage">
            <div className="CCP-nav-bg"></div>
            <div className='ImgDivWorkingPage'>
                <img src={WorkingImg} className="WorkingImg" />
                
                <p className='WorkingPageTitle'>
                    OOPS, THIS TIME FOR WE ARE WORKING FOR THIS PAGE !
                </p>
            </div>
        </div>
    );
};

export default WorkingPage;