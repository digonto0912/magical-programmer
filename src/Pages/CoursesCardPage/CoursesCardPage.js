import React,{useState, useEffect} from 'react';
import "./CoursesCardPage.css";
import UseAuth from "../hooks/UseAuth";

const CoursesCardPage = () => {
    
    const [CCIs, setCCIs] = useState([]);
    
    // UseAuth
    const { userInfo } = UseAuth();
    
    const userCoursesCards = async() =>{
        const userEmail = await userInfo?.email;
        
        fetch(`https://blooming-island-64834.herokuapp.com/CCI`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userEmail})
        })
        .then(res => res.json())
        .then(data => {
            setCCIs(data)
            console.log(CCIs);
        });

        document.getElementById("userCoursesCardsBTN").disabled = true;
    };

    return (
        <div>
            <div className="CCP-nav-bg"></div>
            
            <div className="CCP">
                
                <div className="PSMAC row">
                    <p className="col-8">
                        Please, Show my all Courses
                    </p>

                    <button onClick={() => userCoursesCards()} id="userCoursesCardsBTN" className="userCoursesCardsBTN col-3">
                        Show
                    </button>
                </div>

                <h1>Welcome, <span className="name-color">{userInfo?.email}</span> in this awesome Course</h1>

                <br />

                <div className="CCPCs row">
                {
                    CCIs.map(CCI =><div className="CCP-card clo-xxl-6">

                    <div className="CCP-card-img">
                        <img src="" alt="" />
                    </div>
                    <div className="CCP-card-textside">
                        <h2>{CCI?.CCN}</h2>
                        <h4>{CCI?.CCAN}</h4>
                        <button>
                            <a href={CCI?.CVA}>
                                watch video
                            </a>
                        </button>
                    </div>
                </div>)
                }
                </div>

            </div>
        </div>
    );
};

export default CoursesCardPage;