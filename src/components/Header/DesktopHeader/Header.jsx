// import React from 'react';
import '@/styles/global.css'
import './Header.css';
import logo from '@assets/images/logo.png';
import MenuComponent from '@components/Header/NavMenu/navMenu'

const Header = () => { 
    return (
        <header>
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="contact-info">
                        <span className="contact-text">+1 (647) 248-3504</span>
                        <span className="contact-address">4646 Dufferin St Unit 1, North York, ON</span>
                    </div>
                </div> 
            </div>
            <div className="header-container">
                <div className="header-inner-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <MenuComponent/>
                </div>
            </div>
        </header>
    )
}

export default Header