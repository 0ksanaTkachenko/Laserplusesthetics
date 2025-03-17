import './safety.css';
import { motion } from 'framer-motion';
import animations from '@data/animations';
import safetyVid from '@assets/images/AboutPage/safety-vid.mp4';
import SkincareProducts from '../skincareProducts/skincareProducts';

const Safety = () => {
  return (
    <div className="safety d-flex flex-column">
      <div className="safety-header-container d-flex">
        <motion.div
          className="safety-title text-center d-flex align-items-center"
          variants={animations.fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>
            Your Safety
            <br />
            Comes First
          </h3>
        </motion.div>
        <div className="safety-description-container d-flex justify-content-center align-items-center">
          <div className="safety-description-text text-center">
            Safety and professionalism are my top priorities. In my work, I use
            only certified skincare products, medical techniques, and
            professional equipment to ensure effective and safe care for your
            skin.
          </div>
        </div>
      </div>
      <div className="safety-main-container position-relative h-100">
        <div className="safety-main-title w-100 text-center">
          What ensures my safety
          <br />
          and professional expertise?
        </div>
        <div className="safety-list-container d-flex align-items-center mx-auto">
          <ul className="safety-list">
            <li>
              Licensed medical education and continuous professional development
            </li>
            <li> Certified procedures and dermatologist-approved products</li>
            <li>
              Compliance with all sanitary regulations and medical standards
            </li>
            <li> Completed exams in safety protocols and antiseptics</li>
            <li> Certified procedures and dermatologist-approved products</li>
            <li>
              Compliance with all sanitary regulations and medical standards
            </li>
            <li>Sterilization of instruments according to medical protocols</li>
            <li>
              Personalized skincare treatments based on skin condition and
              health
            </li>
          </ul>
          <motion.div
            className="safety-vid"
            variants={animations.slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <video
              className="w-100 h-auto d-block"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={safetyVid} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
      <div className="safety-footer">
        <SkincareProducts />
      </div>
    </div>
  );
};

export default Safety;
