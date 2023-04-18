import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
    
    return (
        <div>
            <Link to='/'>Home &nbsp;</Link>
            <Link to='/aboutus'>About Us &nbsp;</Link>
            <Link to='/classes'>Classes &nbsp;</Link>
            <Link to='/blog'>Blog &nbsp;</Link>
        </div>
    )
}