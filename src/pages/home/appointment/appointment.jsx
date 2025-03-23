import './appointment.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ModalAppointment from '@components/modalAppointment/modalAppointment';
import avocadoGirl from '@assets/images/HomePage/appoitment-section/avocado-girl.png';
import GoldButton from '@components/goldbutton/goldbutton';
import animations from '@data/animations';

const Appointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="appointment-section">
      <div className="home-page-container d-flex h-100">
        <div className="appointment-text-container d-flex flex-column align-items-center justify-content-center">
          <h1 className="appointment-header text-center">
            Your Beauty Journey
            <br />
            Starts Here
          </h1>
          <p className="appointment-text text-center">
            Unlock your true beauty potential with our professional treatments.
            Book your appointment today and shine like never before.
          </p>
          <div className="appoitment-btn-container">
            <motion.div
              animate={animations.pulse}
              whileHover={animations.hover}
            >
              <GoldButton onClick={() => setIsModalOpen(true)}>
                Make an Appointment
              </GoldButton>
            </motion.div>
            <ModalAppointment
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
        <div className="appointment-img-container overflow-hidden d-flex">
          <img
            className={
              'avocado-girl-img w-100 h-100 object-fit-cover object-position-center img-fluid'
            }
            src={avocadoGirl}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
