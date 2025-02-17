/* eslint-disable react/prop-types */
import './skincareProducts.css';
import skincare from '../../../../data/skincare';

const SkincareProducts = () => {
    const SkincareCard = ({ data }) => {
        const cardTypes = {
            feature: (
                <div className="skincare-card">
                    <div className='feature-card-img h-50 overflow-hidden'>
                        <img src={data.img} className='w-100 h-100 object-fit-cover' alt="" />
                    </div>
                    <div className='feature-card-text h-50 d-flex flex-column justify-content-center align-items-end position-relative'>
                        <div className='skincare-title feature-title position-absolute text-end'>
                            <div className='skincare-text'>{data.title}</div>
                        </div>
                        <div className='skincare-description'>{data.description}</div>
                    </div>
                </div>
            ),
            overlay: (
                <div className="skincare-card">
                    <div className="overlay-container w-100 h-100 d-flex justify-content-center align-items-center position-relative" style={{ backgroundImage: `url(${data.img})` }}>
                        <div className='skincare-title overlay-title position-absolute text-end'>
                            <div className='skincare-text'>{data.title}</div>
                        </div>
                        <div className='skincare-description overlay-description'>{data.description}</div>
                    </div>
                </div>
            )
        };
        return cardTypes[data.type]; 
    };

    return (
        <div className="skincare-section">
            <h3 className="skincare-header w-100 text-center">Skincare i work with:</h3>
            <div className="skincare-container d-flex flex-wrap h-100">
                {skincare.map((cardData) => (
                    <SkincareCard key={cardData.title} data={cardData} /> 
                ))}
            </div>
        </div>
    );
};

export default SkincareProducts;
