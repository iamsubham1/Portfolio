import React from 'react'
import { useState } from "react";
// import Arrow from "../assests/arrow.svg";
import Arrow from './Arrow';
const Navbar = () => {
    const [activeLink, setActiveLink] = useState("#page1");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const linkStyle = {
        color: activeLink ? "#fff" : "",
        backgroundColor: activeLink ? '#1c1c1b' : "",
        borderRadius: activeLink ? '3px' : "",

    };
    return (
        <div>
            <div className='empty-div '>
                <Arrow />
            </div>
            <ul className='navbar'>
                <li><a href="#page1" style={activeLink === "#page1" ? linkStyle : {}} onClick={() => handleLinkClick("#page1")}>Home</a></li>
                <li><a href="#page2" style={activeLink === "#page2" ? linkStyle : {}} onClick={() => handleLinkClick("#page2")} >Work</a></li>
                <li><a href="#page3" style={activeLink === "#page3" ? linkStyle : {}} onClick={() => handleLinkClick("#page3")} >Journey</a></li>
                <li><a href="#page4" style={activeLink === "#page4" ? linkStyle : {}} onClick={() => handleLinkClick("#page4")} >Contact</a></li>
            </ul>

        </div>
    )
}
export default Navbar
