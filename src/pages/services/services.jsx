/* eslint-disable react/prop-types */
import './services.css';
import services from "../../data/services"
import servicesHeaderImg from '@assets/images/ServicesPage/services-header.jpg';
import skincarehlightImg from '@assets/images/ServicesPage/skincare-highlight.png';
import underlinedImg from '@assets/images/ServicesPage/underlined.png';
import ServicesGroup from './servicesGroup/servicesGroup';
import ServiceFilter from './serviceFilter/serviceFilter';
import { useState, useRef } from 'react';
import ModalAppointment from '@components/modalAppointment/modalAppointment';

const ServicesPage = () => {
    const [clickedСategory, setClickedСategory] = useState(null)
    const subServicesRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="services-page d-flex flex-column">
            <div className="servises-header d-flex position-relative">
                <div className='servises-header-overlay position-absolute w-100 h-100'></div>
                <div className="services-header-text">
                    <div className='services-header-title position-relative text-center d-flex flex-column justify-content-center align-items-center'>
                        <h2>Services</h2>
                        <p>Discover the world of professional skincare! Choose from the best advanced cosmetic treatments to achieve a healthy glow, youthful radiance, and confidence.</p>
                    </div>
                </div>
                <div className="services-header-img overflow-hidden">
                    <img src={servicesHeaderImg} className='img-fluid w-100 h-100' alt="" />
                </div>
            </div>
            <div className="skincare-highlight d-flex align-items-center justify-content-center">
                <div className="skincare-highlight-text text-center skincare-text-left">
                    <p>Relax, trust, and shine.</p>
                    <img src={underlinedImg} className='img-fluid w-100' alt="" />
                </div>
                <div className="skincare-image">
                    <img src={skincarehlightImg} className='img-fluid w-100 h-100' alt="Skincare products" />
                </div>
                <div className="skincare-highlight-text text-center skincare-text-right">
                    <p>I care for your skin.</p>
                    <img src={underlinedImg} className='img-fluid w-100' alt="" />
                </div>
            </div>
            <div className='services-main'>
                <ServicesGroup subServicesRef={subServicesRef} setClickedСategory={setClickedСategory} services={services} />  
                <ServiceFilter subServicesRef={subServicesRef} clickedСategory={clickedСategory} />  
                <div className='book-now d-flex justify-content-center' onClick={() => setIsModalOpen(true)}>
                    <div className='book-now-img position-relative'></div>
                </div>
                 <ModalAppointment isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    )
}

export default ServicesPage