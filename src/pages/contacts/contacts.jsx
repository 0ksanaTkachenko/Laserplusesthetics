import './contacts.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
import contactsHeader from '@assets/images/contactsPage/contacts-header.png';
import phoneIcon from '@assets/images/icons/phone-icon.png';
import locationIcon from '@assets/images/icons/location-icon.png';
import emailIcon from '@assets/images/icons/email-icon.png';
import { socialsMedia } from '@data/contactData';
import AppointmentForm from '@components/appointmentForm/appointmentForm';
import { contactInfo } from '@data/contactData';

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9376122226486!2d-79.47174818831711!3d43.77415387097593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2de2693b8ea5%3A0xfb0a3c45f6c0f201!2zNDY0NiBEdWZmZXJpbiBTdCwgTm9ydGggWW9yaywgT04gTTNIIDVTNCwg0JrQsNC90LDQtNCw!5e0!3m2!1sru!2s!4v1740654427178!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="contacts-header d-flex">
        <div className="contacts-img-container">
          <img
            src={contactsHeader}
            className="img-fluid w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>
        <div className="contacts-header-text d-flex flex-column align-items-center justify-content-between">
          <motion.h1
            variants={animations.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contacts
          </motion.h1>
          <div className="contacts-items d-flex flex-column">
            <div className="contact-item">
              <img src={locationIcon} alt="Location" className="contact-icon" />
              <p>{contactInfo.location}</p>
            </div>
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <p>{contactInfo.phone}</p>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <p>{contactInfo.email}</p>
            </div>
          </div>
          <div className="social-media-container d-flex justify-content-around">
            {socialsMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  custom={index}
                  variants={animations.itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  src={social.icon}
                  alt={social.name}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="contacts-highlight d-flex justify-content-center align-items-center flex-column">
        <h2>Let’s Connect!</h2>
        <p className="text-center">
          Have questions about skincare or want to book an appointment? I’m here
          to help! Whether you’re looking for expert advice, personalized
          treatments, or just want to learn more about my services, feel free to
          reach out. Fill out the form below, and I’ll get back to you within 24
          hours!
        </p>
        <a href={`tel:${contactInfo.phoneLink}`} className="call-btn">
          📞 Call Now
        </a>
      </div>
      <div className="contacts-main d-flex">
        <motion.div
          className="contacts-form"
          variants={animations.slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AppointmentForm isformSmall={true} />
        </motion.div>
        <motion.div
          className="contacts-map"
          variants={animations.slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GoogleMap />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactsPage;
