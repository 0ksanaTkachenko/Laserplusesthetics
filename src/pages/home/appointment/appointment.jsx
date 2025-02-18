/* eslint-disable react/prop-types */
import './appointment.css';
import ModalAppointment from '../../../components/modalAppointment/modalAppointment';
import avocadoGirl from '@assets/images/HomePage/appoitment-section/avocado-girl.png';
import GoldButton from '@components/goldButton/goldButton'
import { useState } from 'react';

const Appointment = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="appointment-section">
            <div className="home-page-container">
                <div className='appointment-text-container'>
                    <h1 className='appointment-header'>Your Beauty Journey<br />Starts Here</h1>
                    <p className='appointment-text'>Unlock your true beauty potential with our professional treatments. Book your appointment today and shine like never before.</p>
                    <div className='appoitment-btn-container'>
                        <GoldButton onClick={() => setIsModalOpen(true)}>Make an Appointment</GoldButton>
                        <ModalAppointment isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div> 
                </div>
                <div className='appointment-img-container'>
                    <img className={"avocado-girl-img img-fluid"} src={avocadoGirl} alt="" />
                </div> 
            </div>  
        </section>
    )
}

export default Appointment