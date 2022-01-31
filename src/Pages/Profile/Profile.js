import React from 'react';
import "./Profile.css";

const Profile = () => {
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
                    fardul digonto
                </div>
            </div>

            <div className="info-box">
                <div className="info-box-title">
                    Email
                </div>
                <div className="info-box-info">
                    fardulislamdigonto799@gmail.com
                </div>
            </div>
            
            <div className="info-box">
                <div className="info-box-title">
                    Phone:
                </div>
                <div className="info-box-info">
                    01674244278
                </div>
            </div>

            </div>

            </div>
            </div>

        </div>
    );
};

export default Profile;