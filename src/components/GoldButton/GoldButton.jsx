/* eslint-disable react/prop-types */
import './goldButton.css';

const GoldButton = ({ children, onClick}) => {
    return (
        <button onClick={onClick}
            className={`gold-button`}
        >
            {children}
        </button>
    );
}

export default GoldButton;
