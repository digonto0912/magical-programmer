import React from 'react';
import "./Profile.css";
import UseAuth from "./../hooks/UseAuth"
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const {userInfo} = UseAuth();
    // react router Navigate
    const Navigate = useNavigate();

    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    const signOut = () => {
        deleteAllCookies();
        
        Navigate("/");
        document.location.reload(true);
        
    }

    return (
        <div className="Profile-Page">
            {/* <div className="CCP-nav-bg"></div> */}
            
            <div className="profile-infos-card">
            <div className="infos-box">
            <img src="https://www.pinclipart.com/picdir/big/351-3519728_png-file-svg-default-profile-picture-free-clipart.png" className="user-img" />

            <div className="all-info">
            <div className="info-box">
                <div className="info-box-title">
                    Name:
                </div>
                <div className="info-box-info">
                    {userInfo?.userName}
                </div>
            </div>

            <div className="info-box">
                <div className="info-box-title">
                    Email
                </div>
                <div className="info-box-info">
                    {userInfo.email}
                </div>
            </div>
            
            <div className="info-box">
                <div className="info-box-title">
                    Phone:
                </div>
                <div className="info-box-info">
                    {userInfo?.phoneNumber}
                </div>
            </div>

            <button className='' onClick={signOut}>
                Sign Out
            </button>

            </div>

            </div>
            </div>

        </div>
    );
};

export default Profile;