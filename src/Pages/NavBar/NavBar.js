import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faChalkboard, faUserPlus, faSignInAlt, faBars, faUser, faPooStorm } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css" ;
import UseAuth from "../hooks/UseAuth";
import logo from "../../images/utilities/magical-programmer-logo-white.png";

const NavBar = () => {
  
  // UseAuth
  const {userInfo} = UseAuth();

  const Bars = <FontAwesomeIcon icon={faBars} className="icon" />;
  const Home = <FontAwesomeIcon icon={faHome} className="icon" />;
  const About = <FontAwesomeIcon icon={faAddressCard} className="icon" />;
  const Courses = <FontAwesomeIcon icon={faChalkboard} className="icon" />;
  const Register = <FontAwesomeIcon icon={faUserPlus} />;
  const Login = <FontAwesomeIcon icon={faSignInAlt} />;
  const User = <FontAwesomeIcon icon={faUser} />;
  const Dashboard = <FontAwesomeIcon icon={faPooStorm} />;


    return (
      <div className="NavBar">

        <img src={logo} className="logo" />

          <input type="checkbox" id="click" />
        <label for="click" className="menuBtn">
            {Bars}
        </label>
        <ul className="nav-big-ul">

          <a href="/">
            <li className="NV-btn-li-tab">
            {Home}Home
            </li>
          </a>

          <a href="/about">
            <li className="NV-btn-li-tab">
            {About}About
            </li>
          </a>
          
          <a href="/courses">
            <li className="NV-btn-li-tab">
            {Courses}Courses
            </li>
          </a>
          

          {/* more button dropdown */}
          <li className="more-button NV-btn-li-tab">
            ...
              
              {/* Dropdowns */}
            <ul className="dropdowns-ul">

              <a href="/problemSolving">
                <li className="DD-li">
                  Problem Solving
                </li>
              </a>

              <a href="/blogs">
                <li className="blogs DD-li">
                  Blogs
                </li>
              </a>

              <a href="/playGround">
                <li className="DD-li">
                  Play Ground
                </li>
              </a>

            </ul>

          </li>

          {
            userInfo.email?
            <div className="ifedNavs">
              <a href="/profile">
                <li className="NV-btn-li-tab">{User}</li>
              </a>
              
              {
                "fardulislamdigonto799@gmail.com" === userInfo.email?
                <a href="/Dashboard">
                  <li className="NV-btn-li-tab">{Dashboard}</li>
                </a>
                :
                <div className="d-none"></div>
              }
            </div>
            :
            <div className="ifedNavs">
              <a href="/register">
            <li className="NV-btn-li-tab">
              {Register}
            </li>
              </a>
              <a href="/login">
            <li className="NV-btn-li-tab">{Login}</li>
              </a>
            </div>
          }
          
        </ul>

      </div>
    );
};

export default NavBar;