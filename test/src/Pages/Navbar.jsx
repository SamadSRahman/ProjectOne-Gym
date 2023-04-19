import React from "react";
import { Link } from "react-router-dom";

import './Home.css'

import "./Navbar.css"

export function Navbar() {

  const value="https://image.similarpng.com/very-thumbnail/2021/07/Fitness-Gym-logo-design-template-on-transparent-background-PNG.png"
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/">
          <img 
          src={value}
          alt="logo"
          />
         </Link>
      </div>
        <div className="navi">
          <nav>
            <Link to="/"><>Home</></Link>
            <Link to="/aboutus"><a>About Us</a></Link>
            <Link to="/classes"><a>Classes</a></Link>
            <Link to="/reviews"><a>Reviews</a></Link>
          </nav>
    
        </div>

        <div className="btnWrapper">
        <Link to='/register'><a className="button">Join us</a></Link>
        </div>
    </div>
  );
}
