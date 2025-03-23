// import React from 'react';
import './Header.css';
import logo from '@assets/images/logo.png';
import MenuComponent from '@components/Header/NavMenu/navMenu';
import { NavLink } from 'react-router-dom';
import routes from '@data/routes';
import { contactInfo } from '@data/contactData';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <span className="contact-text">{contactInfo.phone}</span>
            <span className="contact-address">{contactInfo.email}</span>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-inner-container d-flex align-items-center justify-content-between">
          <NavLink to={routes.home}>
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <MenuComponent />
        </div>
      </div>
    </header>
  );
};

export default Header;
