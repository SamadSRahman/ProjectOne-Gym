import React from "react";
import { Link } from "react-router-dom";

import './Home.css'

import "./Navbar.css"

export function Navbar() {

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/">
          <img 
          src="https://www.shutterstock.com/image-vector/fitness-gym-logo-design-template-260nw-1662632119.jpg"
          alt="logo"
          />
         </Link>
      </div>
        <div className="navi">
          <nav>
            <Link to="/"><span>Home</span></Link>
            <Link to="/aboutus"><span>About Us</span></Link>
            <Link to="/classes"><span>Classes</span></Link>
            <Link to="/blog"><span>Blog</span></Link>
          </nav>
    
        </div>
    </div>
  );
}
