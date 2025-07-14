import React from "react";
import './navbar.css';

import logo1 from '../assets/logo1.jpg';
import {Link} from 'react-scroll';
const Navbar=()=>{
    return(
            <nav className="navbar">
                <img src={logo1}alt="logo" className="logoo"/>
                <div className="Desktoplinks">
                    <Link className="link" to="/"smooth={true} duration={500}>Home</Link>
                    <Link className="link" to="About"smooth={true} duration={500} activeClass="active">About</Link>
                    <Link className="link" to="resume"smooth={true} duration={500}>Resume</Link>  
                    <Link className="link" to="Project"smooth={true} duration={500}>projects</Link>  
                    <Link className="link" to="contact"smooth={true} duration={500}>Contact</Link> 
                </div>
            </nav>
    )
}
export default Navbar;