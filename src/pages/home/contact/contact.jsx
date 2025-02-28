/* eslint-disable react/prop-types */
import './contact.css';
import GoldButton from '../../../components/goldbutton/goldbutton';
import useScrollTo from '../../../hooks/useScrollTo';
import routes from '../../../data/routes';

const Contact = () => {
  const { navigateScrollToTop } = useScrollTo();

  return (
    <div className="contact-section">
      <h1>Get in Touch!</h1>
      <p className="contact-section-p">
        Have questions or ready to book an appointment? Visit the Contacts page
        to call, message, or find me on social media. Let’s start your journey
        to healthy, glowing skin!
      </p>
      <GoldButton onClick={() => navigateScrollToTop(routes.contacts)}>
        Let’s Connect!
      </GoldButton>
    </div>
  );
};

export default Contact;
