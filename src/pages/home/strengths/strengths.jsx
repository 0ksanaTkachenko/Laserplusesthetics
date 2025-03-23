import './strengths.css';
import { motion } from 'framer-motion';
import SectionHeader from '@components/sectionHeader/sectionHeader';
import strengthsData from '@data/strengths';
import animations from '@data/animations';

const StrengthsItem = ({ icon, text, index }) => {
  return (
    <motion.div
      className="strengths-item d-flex align-items-center justify-content-center"
      initial="hidden"
      whileInView="visible"
      variants={animations.itemVariants}
      custom={index}
      viewport={{ once: true }}
    >
      <img src={icon} alt="" />
      <p>{text}</p>
    </motion.div>
  );
};

const Strengths = () => {
  return (
    <section className="strengths-section d-flex flex-column align-items-center justify-content-center text-center">
      <SectionHeader p={'Why Choose Me'} h2={'Strengths'} />
      <div className="strengths-container d-flex">
        {strengthsData.map((item, index) => (
          <div className="strengths-item-container" key={index}>
            <StrengthsItem icon={item.icon} index={index} text={item.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strengths;
