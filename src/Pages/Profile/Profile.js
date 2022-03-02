import React from 'react';
import "./Profile.css";
import UseAuth from "./../hooks/UseAuth"

const Profile = () => {

    const {userInfo} = UseAuth();

    const signOut = () => {
        const SG = document?.cookie?.split(";")?.find(c => c?.includes("SG"));
        SG.remove();
    }

    return (
        <div className="Profile-Page">
            {/* <div className="CCP-nav-bg"></div> */}
            
            <div className="profile-infos-card">
            <div className="infos-box d-flex">
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