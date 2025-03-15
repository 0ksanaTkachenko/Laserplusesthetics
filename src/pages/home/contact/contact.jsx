/* eslint-disable react/prop-types */
import './contact.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
import GoldButton from '@components/goldbutton/goldbutton';
import useScrollTo from '@hooks/useScrollTo';
import routes from '@data/routes';

const Contact = () => {
  const { navigateScrollToTop } = useScrollTo();

  return (
    <div className="contact-section d-flex justify-content-center align-items-center flex-column">
      <h1>Get in Touch!</h1>
      <p className="contact-section-p text-center">
        Have questions or ready to book an appointment? Visit the Contacts page
        to call, message, or find me on social media. Let’s start your journey
        to healthy, glowing skin!
      </p>
      <motion.div
        className="d-inline-block"
        variants={animations.itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={animations.hover}
      >
        {' '}
        <GoldButton onClick={() => navigateScrollToTop(routes.contacts)}>
          Let’s Connect!
        </GoldButton>
      </motion.div>
    </div>
  );
};

export default Contact;
