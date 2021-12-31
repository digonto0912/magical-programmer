import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import "./HomeBanner.css";
import img1 from "../../../../images/Home-img/mockup-content-1.svg";
import img2 from "../../../../images/Home-img/mockup-card-2.svg";
import img3 from "../../../../images/Home-img/mockup-card-3.svg";
import img4 from "../../../../images/Home-img/mockup2-bg-4.svg";
import img5 from "../../../../images/Home-img/mockup3-bg-5.svg";

const Banner = () => {

    const startNow = <FontAwesomeIcon icon={faHandSpock} className="startNowIcon icon fa-2x" />

    return (

        // Home Page
        <div className="HomePage">
            
            {/* banner */}
            <div className="banner">
                <div>

                    {/* h2 text */}
                    <h2 className="banner-headline">
                        <b>
                            When Magical Learning

                            <br />
                            + Codeing is Done,
                            <br />

                            Then Born a cute magical program
                        </b>
                    </h2>

                    {/* button */}
                    <Link to={"courses"}>
                    <button className="SL-btn">
                        {startNow}<b>Start Learning</b>
                    </button>
                    </Link>

                    {/* h6 text */}
                    <h6 className="SL-BTN-D-H6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nemo.10
                    </h6>

                </div>

                {/* Banner Images */}
                <div className="imgs-div">
                    <img src={img1} className="img1" />
                    <img src={img2} className="img2" />
                    <img src={img3} className="img3" />
                    <img src={img4} className="img4" />
                    <img src={img5} className="img5" />
                </div>
            </div>
        </div>
    );
};

export default Banner;