import React, {useState,useEffect} from 'react';
import "./CoursesInfoCards.css";

const CoursesInfoCards = () => {

    // 1st cards api
    const [cards1stsections, setcards1stsections] = useState([]);

    useEffect(()=>{
        fetch("https://magical-programmer-server-from-git.onrender.com/CIC3Card1stApi")
        .then(res => res.json())
        .then(data => setcards1stsections(data))
    },[]);
    
    // 2nd card api
    const [cards2ndsections, setcards2ndsections] = useState([]);

    useEffect(()=>{
        fetch("https://magical-programmer-server-from-git.onrender.com/CIC3Card2ndApi")
        .then(res => res.json())
        .then(data => setcards2ndsections(data))
    },[]);
    
    // 3rd card api
    const [cards3rdsections, setcards3rdsections] = useState([]);

    useEffect(()=>{
        fetch("https://magical-programmer-server-from-git.onrender.com/CIC3Card3rdApi")
        .then(res => res.json())
        .then(data => setcards3rdsections(data))
    },[]);

    function btn1(){
        const card1 = document.querySelector("#card1");
        const card2 = document.querySelector("#card2");
        const card3 = document.querySelector("#card3");
        
        card1.style.display="block";
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
                এই কোর্সের বিশেষত্ব কি?
                </button>
                <button onClick={()=>btn2()}>
                এই কোর্স কিভাবে চলবে?
                </button>
                <button onClick={()=>btn3()}>
                কি কি শিখতে পারবে
                </button>

            </div>

            <div className="cards-div">
            {/* card 1 */}
            <div id="card1">
                <div className="card-respon">
                {
                    cards1stsections.map(cards1stsection => <div className={`items-cards ${cards1stsection.colorId}`}>
                            
                            <img src={`data:image/png;base64,${cards1stsection.image}`} className="card1-img" />
                            
                            <p className="items-cards-text">
                                {cards1stsection.headline}
                            </p>
                            
                            <p className="items-cards-reating">
                                Reating - {cards1stsection.reating}
                            </p>
                            
                        </div>
                    )
}
                </div>
            </div>

            {/* card 2 */}
            <div id="card2">
                <div className="card-2-respon card-respon">
                {
                    cards2ndsections.map(cards2ndsection => <div className="card-2">
                            <div className="number-div">
                                <b>
                                    {cards2ndsection.num}
                                </b>
                            </div>
                            <div className="text-div">
                                {cards2ndsection.texts}
                            </div>
                        </div>
                    )
                }
                </div>
            </div>

            {/* card3 */}
            <div id="card3">
                <div className="card-respon">
                {
                    cards3rdsections.map(cards3rdsection =><div className="card-3">
                    
                    <div className="card3-img">
                    !
                    </div>

                    <div className="CIC-KS-text">
                        {cards3rdsection.whatYouLearn}
                    </div>
                    
                </div>
                    )
                }
                </div>                
            </div>
</div>

        </div>
    );
};

export default CoursesInfoCards;