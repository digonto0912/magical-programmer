import React, {useState, useEffect} from 'react';
import "./CourseInroleCard.css" ;
import cardImg from "../../../../images/Home-img/course-thumbnails.png" ;
import assignmentIcon from "../../../../images/Home-img/assignment.png" ;
import tutorialsIcon from "../../../../images/Home-img/tutorials.png" ;
import workingIcon from "../../../../images/Home-img/working.png" ;

const CourseInroleCard = () => {
    
    const [CIDCHs, setCIDCHs] = useState([]);
    
  // course Infos Dark Cards
  useEffect(()=>{
    fetch("https://blooming-island-64834.herokuapp.com/CIDCH")
    .then(res => res.json())
    .then(data => setCIDCHs(data))
  },[]);

    return (
        CIDCHs.map(CIDCH => <div className="CC-card">
            <div className="cardImg">
                <img className="cardImages" src={cardImg} />
            </div>

            <div>
                <h1 className="h1-text">{CIDCH.headline}</h1>
                <h4 className="h4-text">
                    {CIDCH.subline}
                </h4>

                <div className="tips">
                    <div>
                        <img className="tips-icon-1" src={assignmentIcon} />
                         <b className="text">12 Assignment</b>
                    </div>
                    <div>
                        <img className="tips-icon-2" src={tutorialsIcon} />
                         <b className="text">800+ Video</b>
                    </div>
                    <div>
                        <img className="tips-icon-3" src={workingIcon} />
                         <b className="text">48+ practice</b>
                    </div>
                </div>

            </div>
        
        </div>
        )
    );
};

export default CourseInroleCard;