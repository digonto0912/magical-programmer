import React from 'react';
import "./CoursesInfoCards.css";

const CoursesInfoCards = () => {

    function btn1(){
        const card1 = document.querySelector("#card1");
        const card2 = document.querySelector("#card2");
        const card3 = document.querySelector("#card3");
        
        card1.style.display="block"
        card2.style.display = "none";
        card3.style.display = "none";
    }
    function btn2(){
        const card1 = document.querySelector("#card1");
        const card2 = document.querySelector("#card2");
        const card3 = document.querySelector("#card3");

        card1.style.display = "none";
        card2.style.display = "block";
        card3.style.display = "none";
    }
    function btn3(){
        const card1 = document.querySelector("#card1");
        const card2 = document.querySelector("#card2");
        const card3 = document.querySelector("#card3");

        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "block";
    }

    return (
        <div className="CoursesInfoCards">
            <div className="d-flex btn-group">

                <button onClick={()=>btn1()}>
                    1. ai korche bisesotto ki?
                </button>
                <button onClick={()=>btn2()}>
                    2. ki ki shikte parbe ?
                </button>
                <button onClick={()=>btn3()}>
                    3. ki shikben ?
                </button>

            </div>

            <div className="cards-div">
<div id="card1" className="items-cards">

                <img src="//images.ctfassets.net/ooa29xqb8tix/4cDON6Rn9Q5ysi4HCsJQOF/fedd689e11b818352c033d5e502ea23c/SwiftUI_Concurrency_800x600_cover.png?w=400&q=50" className="card1-img" />
                <p className="items-cards-text">
                Powerful Supports-24hr
                </p>
                <p className="items-cards-reating">
                    Reating - 5.0
                </p>

            </div>

            {/* card 2 */}
            <div id="card2">
                
                <div className="card-2">
                <div className="number-div">
                    <b>
                        1
                    </b>
                </div>
                <div className="text-div">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim accusamus laborum eligendi, nesciunt error porro.
                </div>
                </div>

            </div>

            {/* card3 */}
            <div id="card3">
                <div className="card-3">
                    
                    <img src="https://thumbs.dreamstime.com/b/white-crumpled-paper-texture-background-clean-white-paper-top-view-white-crumpled-paper-texture-background-clean-white-paper-top-214875245.jpg" className="card3-img" />

                    <div className="CIC-KS-text">
                        ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে ভাব পেটাতে পারবে।
                    </div>
                    
                    <button className="CIC-Course-SL-btn">Demo</button>
                </div>
            </div>
</div>

        </div>
    );
};

export default CoursesInfoCards;