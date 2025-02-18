import { useState, useEffect } from 'react';
import './MobileHeader.css';
import circleOnlyLogo from '@assets/images/circle-only-logo.png';
import MenuComponent from '@components/Header/NavMenu/navMenu'

const MobileHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className="mobile-header-container">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2>Laser plus Esthetics</h2>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <MenuComponent mobileMenuClicked={toggleMenu} />
                <img src={circleOnlyLogo} alt="Logo" className="logo" />
            </nav>
        </div>
    );
}

export default MobileHeader




