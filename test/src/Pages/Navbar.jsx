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
            <Link to="/"><a>Home</a></Link>
            <Link to="/aboutus"><a>About Us</a></Link>
            <Link to="/classes"><a>Classes</a></Link>
            <Link to="/blog"><a>Blog</a></Link>
          </nav>
    
        </div>
    </div>
  );
}
