import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
    
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/classes'>Classes</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    )
}