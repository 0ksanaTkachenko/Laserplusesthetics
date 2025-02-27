/* eslint-disable react/prop-types */
import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import routes from '../../../data/routes';

const MenuComponent = ({ mobileMenuClicked }) => {
  return (
    <nav className="nav-menu">
      <NavLink
        onClick={mobileMenuClicked}
        to={routes.home}
        end
        className="nav-item"
      >
        Home
      </NavLink>
      <NavLink
        onClick={mobileMenuClicked}
        to={routes.about}
        className="nav-item"
      >
        About
      </NavLink>
      <NavLink
        onClick={mobileMenuClicked}
        to={routes.services}
        className="nav-item"
      >
        Services
      </NavLink>
      <NavLink
        onClick={mobileMenuClicked}
        to={routes.results}
        className="nav-item"
      >
        Results
      </NavLink>
      <NavLink
        onClick={mobileMenuClicked}
        to={routes.contacts}
        className="nav-item"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default MenuComponent;
