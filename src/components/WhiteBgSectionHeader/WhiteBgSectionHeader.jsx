/* eslint-disable react/prop-types */
import './WhiteBgSectionHeader.css';
import useScrollAnimation from '@hooks/useScrollAnimation'

const WhiteBgHeader = ({ p, h2 }) => {
    
    useScrollAnimation('.text-container-item');

    return (
        <div className="WhiteBg-text-container">
            <p className='text-container-item'>{p}</p>
            <h2 className='text-container-item'>{h2}</h2>
        </div>
    )
}

export default WhiteBgHeader