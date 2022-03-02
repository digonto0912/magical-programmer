import React,{useEffect, useState, useRef} from 'react';
import "./PaymentPage.css";
import UseAuth from "../hooks/UseAuth";

const PaymentPage = () => {
    // UseAuth
    const {userInfo} = UseAuth();

    const phoneRef = useRef();
    const bkashRef = useRef();

    const [PayRules, setPayRules] = useState([]);
    const [TTRCN, setTTRCN] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:2333/PaymentSystemRuls")
        .then(res => res.json())
        .then(data => setPayRules(data))
    },[])
    useEffect(()=>{
        fetch("http://localhost:2333/ThisTimeRunningCourseName")
        .then(res => res.json())
        .then(data => setTTRCN(data))
    },[])

    const PPRTC = () => {
        const bottomInutCard = document.querySelector("#bottomInputeCard");

        bottomInutCard.style.display = "block";
    }

    // all function

    const formSub = e => {
        e.preventDefault();
    }

    const bkashInfoSub = () => {
        const phoneNumber = phoneRef.current.value;
        const bkashCode = bkashRef.current.value;
        const email = userInfo.email;
        const course = TTRCN[0].ThisTimeRunningCourseName;

        console.log(course);
        const bkashPaymentInfo = {phoneNumber,
            bkashCode, 
            email,
            course
        };
        console.log(bkashPaymentInfo);

        fetch("http://localhost:2333/bkashPayment", {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bkashPaymentInfo)
        })
        .then()
    } 

    return (
        <div>
            <div className="nav-bg"></div>
            <div className="PaymentPage">
            <h1 className="headline">
                Payment System
            </h1>

            <div className="d-flex PPD">
                <div>
                    <div className="top-half-box">
                        <ol className="PP-ol">
                            {
                                PayRules.map(PayRule =><li
                                key={PayRule._id}
                                >
                                    {PayRule.rule}
                                </li>
                                )
                            }
                        </ol>
                    </div>

                        <div className="btn-bg">
                        
                        <button onClick={()=>PPRTC()} id="topRulesCard" className="PP-btn">
                            Done
                        </button>
                        
                        </div>

                    <div id="bottomInputeCard">
                        <h3 className="headline headline-mt">Submite your phone number or verify code</h3>
                        
                        <form onSubmit={formSub} className="form">
                            <input type="text" ref={phoneRef} name="your phonr number"  placeholder="your phone number" />

                            <br />

                            <input type="text" ref={bkashRef} name="your bkash code" placeholder="your bkash code" />

                            <br />
                            
                            <div className="form-sub-btn">
                                <input type="submit" onClick={bkashInfoSub} value="submit this" className="PP-input-btn" />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <video src="" className="payment-system-video"></video>
                </div>    
            </div>

        </div>
        </div>
    );
};

export default PaymentPage;