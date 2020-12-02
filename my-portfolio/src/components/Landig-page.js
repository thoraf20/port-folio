import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import "../styles/landing-page.css";
// import About from "./About";

export default function LandigPage() {
    return (
        <div className="body">
            <section className="main">
                <nav>
                    <Link to="#" className="logo">LOGO</Link>
                    <ul className="menu">
                        <li><Link to="/home" className="a">Home</Link></li>
                        <li><Link to="/about" className="a">About</Link></li>
                        <li><Link to="/services" className="a">Services</Link></li>
                        <li><Link to="/portfolio" className="a">Portfolio</Link></li>
                        <li><Link to="" className="a">Portfolio</Link></li>
                        <li><Link to="/Contact" className="a">Contact</Link></li>
                    </ul>
                        <Link to="#" className="lang">En</Link>
                </nav>

                <div className="name">
                    <p>Hello</p>

                    <h1>I'm <font color="#171dac">Toheeb </font>Rauf</h1>

                    <p className="details">I am a passionate Full-Stack Software Engineer</p>

                    <Link to="#" className="cv-btn">Download My CV</Link>
                </div>

                <div className="social">
                    <Link to="#"><i className="github"><FaFacebookF /></i></Link>
                    <Link to="#"><i className="twitter"><FaTwitter /></i></Link>
                    <Link to="#"><i className="linkedin"><FaGithub/></i></Link>
                </div>

                <div className="arrow">

                </div>


            </section>
            {/* <About /> */}
            
        </div>
    )
}
