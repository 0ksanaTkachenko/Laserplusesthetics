// import React from 'react';
import '../../styles/global.css';
import './Header.css';

import logo from '../../assets/images/logo.png';

const Header = () => { 
    return (
        <header>
            <div className="full-width">
                <div className="full-width-centering">
                    <div className="top-bar">
                        <div className="container">
                            <div className="contact-info">
                                <span className="contact-text">+1 (647) 248-3504</span>
                                <span className="contact-address">4646 Dufferin St Unit 1, North York, ON</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <img src={logo} alt="Logo" className="logo" />
                    <nav className="nav-menu">
                        <a href="#home" className="nav-item">Home</a>
                        <a href="#about" className="nav-item">About</a>
                        <a href="#services" className="nav-item">Services</a>
                        <a href="#results" className="nav-item">Results</a>
                        <a href="#faq" className="nav-item">FAQ</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header