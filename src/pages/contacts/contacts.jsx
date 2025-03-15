import './contacts.css';
import contactsHeader from '@assets/images/contactsPage/contacts-header.png';
import phoneIcon from '@assets/images/icons/phone-icon.png';
import locationIcon from '@assets/images/icons/location-icon.png';
import emailIcon from '@assets/images/icons/email-icon.png';
import instagramIcon from '@assets/images/icons/instagram.png';
import telegramIcon from '@assets/images/icons/telegram.png';
import whatsappIcon from '@assets/images/icons/whatsapp.png';
import AppointmentForm from '@components/appointmentForm/appointmentForm';

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
      <div className="contacts-header">
        <div className="contacts-img-container">
          <img src={contactsHeader} className="img-fluid w-100 h-100" alt="" />
        </div>
        <div className="contacts-header-text">
          <h1>Contacts</h1>
          <div className="contacts-items">
            <div className="contact-item">
              <img src={locationIcon} alt="Location" className="contact-icon" />
              <p>4646 Dufferin St Unit 1, North York, ON</p>
            </div>
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <p>+1 (647) 248-3504</p>
            </div>
            <div className="contact-item">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <p>sampleEmail@gmail.com</p>
            </div>
          </div>
          <div className="social-media-container">
            <img src={instagramIcon} alt="" />
            <img src={telegramIcon} alt="" />
            <img src={whatsappIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="contacts-highlight">
        <h2>Let’s Connect!</h2>
        <p>
          Have questions about skincare or want to book an appointment? I’m here
          to help! Whether you’re looking for expert advice, personalized
          treatments, or just want to learn more about my services, feel free to
          reach out. Fill out the form below, and I’ll get back to you within 24
          hours!
        </p>
        <a href="tel:+16472483504" className="call-btn">
          📞 Call Now
        </a>
      </div>
      <div className="contacts-main">
        <AppointmentForm isformSmall={true} />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactsPage;
