/* eslint-disable react/prop-types */
import './NavMenu.css';
import { NavLink } from 'react-router-dom';

const MenuComponent = ({mobileMenuClicked}) => {
    return (
        <nav className="nav-menu">
            <NavLink onClick={mobileMenuClicked} to="/Laserplusesthetics/" end className="nav-item">Home</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/Laserplusesthetics/about" className="nav-item">About</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/Laserplusesthetics/services" className="nav-item">Services</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/Laserplusesthetics/results" className="nav-item">Results</NavLink>
            <NavLink onClick={mobileMenuClicked} to="/Laserplusesthetics/faq" className="nav-item">FAQ</NavLink>
        </nav>
    );
};

export default MenuComponent;
