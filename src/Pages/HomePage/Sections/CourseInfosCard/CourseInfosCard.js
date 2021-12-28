import React from 'react';
import "./CourseInfosCard.css" ;

const CourseInfosCard = () => {
    return (
        <div className="CIC">
            <div className="CIC-text">
                <h5 className="CIC-div-headline">COURSES INFO</h5>
                <h1>Tutorials to guide you beyond</h1>
                <h5>
                    Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge
                </h5>
                <button>
                Inrole now
                </button>
            </div>

            <div className="info-cards">
                
                {/* card 1 */}

                <div className="info-card">
                    <div className="info-up-card">
<h3>course subida</h3>
                    <h5>
                        course subidacourse subidacourse subidacourse subidacourse subida
                    </h5>
                    <div className="infos">
                        <div className="info-number">1</div>
                        <div>powerful 24hr supports</div>
<div className="info-lvl">pro</div>
                    </div>
</div>
<div className="info-down-card-1st"></div>
                </div>
                
                {/* card 2 */}

                <div className="info-card">
                    <div className="info-up-card">
<h3>course subida</h3>
                    <h5>
                        course subidacourse subidacourse subidacourse subidacourse subida
                    </h5>
                    <div className="infos">
                        <div className="info-number">1</div>
                        <div>powerful 24hr supports</div>
<div className="info-lvl">pro</div>
                    </div>
</div>
<div className="info-down-card-2nd"></div>
                </div>

            </div>
        </div>
    );
};

export default CourseInfosCard;