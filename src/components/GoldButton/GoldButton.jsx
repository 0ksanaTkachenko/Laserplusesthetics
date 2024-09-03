/* eslint-disable react/prop-types */

import './GoldButton.css';

const GoldButton = ({ children, className, bounce = false, onClick}) => {

    
    
    return (
        <button onClick={onClick}
            className={`gold-button ${className} ${bounce ? 'bounce' : ''}`}
        >
            {children}
        </button>
    );
}

export default GoldButton;
