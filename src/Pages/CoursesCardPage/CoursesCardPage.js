import React,{useState, useEffect} from 'react';
import "./CoursesCardPage.css";
import Auth from "../hooks/Auth";

const CoursesCardPage = () => {
    
    const [CCIs, setCCIs] = useState([]);
    
    // auth
    const {userInfo} = Auth();
    
    const userCoursesCards = async() =>{
        if(CCIs === false){
            const userEmail = await userInfo?.email;
        
            fetch(`http://localhost:2333/CCI`, {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userEmail})
            })
            .then(res => res.json())
            .then(data => setCCIs(data))
        }
        else if(CCIs === true){
            return;
        }        
    };
    console.log(CCIs)
    
    userCoursesCards();

    return (
        <div>
            <div className="CCP-nav-bg"></div>
            
            <div className="CCP">
                <h1>Welcome, <span className="name-color">{userInfo?.email}</span> in this awesome Course</h1>

                {
                    CCIs.map(CCI =><div className="CCP-card">

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
    );
};

export default CoursesCardPage;