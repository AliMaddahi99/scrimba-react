import React from "react";
import Logo from "../Images/react-icon-small.png";

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <img src={Logo} alt="react logo" className="nav-icon" />
                <h3 className="nav-icon-text">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1</h4>
            </nav>
        </div>
    )
}

export default Navbar;