import React from 'react';
import "./PaymentPage.css";

const PaymentPage = () => {
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
                            <li>
                                banglae 1 2 diea lekha bangla vasae ruls gulo
                            </li>
                        </ol>
                    </div>

                        <div className="btn-bg">
<button className="PP-btn">
                            Done
                        </button>
</div>

                    <div>
                        <h3 className="headline headline-mt">Submite your phone number or verify code</h3>
                        
                        <form className="form">
                            <input type="text" name="your phonr number"  placeholder="your phone number" />

                            <br />

                            <input type="text" name="your bkash code" placeholder="your bkash code" />

                            <br />
                            
                            <div className="form-sub-btn">
<input type="submit"value="submit this" className="PP-input-btn" />
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