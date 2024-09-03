/* eslint-disable react/prop-types */
import './NavMenu.css';
import { NavLink } from 'react-router-dom';

const MenuComponent = ({mobileMenuClicked}) => {
    return (
        <nav className="nav-menu">
            <NavLink onClick={mobileMenuClicked} to="/" className="nav-item">Home</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/about" className="nav-item">About</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/services" className="nav-item">Services</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/results" className="nav-item">Results</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/faq" className="nav-item">FAQ</NavLink>
        </nav>
    );
};

export default MenuComponent;
