import React from 'react';
import './Page404.css';
import Img404 from "./../../images/404/404.svg";

const Page404 = () => {
    return (
        <div class="Page404">
            <div class="CCP-nav-bg"></div>
            <div className='ImgDiv404'>
                <img src={Img404} className="Img404" />
                
                <p className='Img404title'>
                    OOPS, PAGE NOT FOUND
                </p>
            </div>
        </div>
    );
};

export default Page404;