/* eslint-disable react/prop-types */
import './sectionHeader.css';

const SectionHeader = ({ p, h2 }) => {
    return (
        <div className="WhiteBg-text-container">
            <p className='text-container-item'>{p}</p>
            <h2 className='text-container-item'>{h2}</h2>
        </div>
    )
}

export default SectionHeader