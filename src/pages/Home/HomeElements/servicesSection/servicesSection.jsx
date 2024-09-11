/* eslint-disable no-unused-vars */
import './servicesSection.css';
import GoldButton from '@components/GoldButton/GoldButton'
import servicesImg from '@assets/images/HomePage/services-section/services-img.jpg'
import servicesLaptopImg from '@assets/images/HomePage/services-section/services-laptop-img.jpg'
import servicesMobileImg from '@assets/images/HomePage/services-section/services-mobile-img.jpg'
import useIsMobile from '@hooks/useIsMobile'
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {

    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const servicesBtnHandleClick = () => {
        navigate('/Laserplusesthetics/services');
    }

    return (
        <section className="services-section">
            <div className='services-container'>
                <div className='services-img-container'>
                    <picture>
                        <source media="(max-width: 600px)" srcSet={servicesMobileImg} /> 
                        <source media="(max-width: 890px)" srcSet={servicesLaptopImg} /> 
                        <img className="services-img" src={servicesImg} alt="" />
                    </picture> 
                    {isMobile && <h1 className='section-header'>Your health and beauty are in good hands</h1>}
                </div> 
                <div className='services-text-container'>
                {!isMobile && <h1 className='section-header'>Your health and beauty are in good hands</h1>}
                    <p className='section-text'>We focus on providing exceptional service and personalized care. Our goal is to ensure your well-being and comfort, offering the best in beauty treatments.</p>
                    <div className='services-bnt-container'>
                        <GoldButton onClick={servicesBtnHandleClick} className={'medium-goldBtn'}>Wiew our services</GoldButton>
                    </div>   
                </div>
            </div>
        </section>
    )
}

export default ServicesSection