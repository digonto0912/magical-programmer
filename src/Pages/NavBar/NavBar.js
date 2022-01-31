import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faChalkboard, faUserPlus, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css" ;
import {
  Link
} from "react-router-dom";

const NavBar = () => {

  const Bars = <FontAwesomeIcon icon={faBars} className="icon" />;
  const Home = <FontAwesomeIcon icon={faHome} className="icon" />;
  const About = <FontAwesomeIcon icon={faAddressCard} className="icon" />;
  const Courses = <FontAwesomeIcon icon={faChalkboard} className="icon" />;
  const Register = <FontAwesomeIcon icon={faUserPlus} />;
  const Login = <FontAwesomeIcon icon={faSignInAlt} />;


    return (
      <div className="NavBar">

        <h1>Brand</h1>

          <input type="checkbox" id="click" />
        <label for="click" className="menuBtn">
            {Bars}
        </label>
        <ul className="nav-big-ul">

          <Link to="/">
            <li className="NV-btn-li-tab">
            {Home}Home
            </li>
          </Link>

          <Link to="/about">
            <li className="NV-btn-li-tab">
            {About}About
            </li>
          </Link>
          
          <Link to="/courses">
            <li className="NV-btn-li-tab">
            {Courses}Courses
            </li>
          </Link>
          

          {/* more button dropdown */}
          <li className="more-button NV-btn-li-tab">
            ...
              
              {/* Dropdowns */}
            <ul className="dropdowns-ul">

              <Link to="/problemSolving">
                <li className="DD-li">
                  Problem Solving
                </li>
              </Link>

              <Link to="/blogs">
                <li className="blogs DD-li">
                  Blogs
                </li>
              </Link>

              <Link to="/playGround">
                <li className="DD-li">
                  Play Ground
                </li>
              </Link>

            </ul>

          </li>

          <Link to="/register">
            <li className="NV-btn-li-tab">
              {Register}
            </li>
          </Link>

          <Link to="/login">
            <li className="NV-btn-li-tab">{Login}</li>
          </Link>
          
          <Link to="/profile">
            <li className="NV-btn-li-tab">{Login}</li>
          </Link>

          <Link to="/Dashboard">
            <li className="NV-btn-li-tab">{Login}</li>
          </Link>
        </ul>

      </div>
    );
};

export default NavBar;