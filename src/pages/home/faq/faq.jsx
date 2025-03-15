/* eslint-disable react/prop-types */
import './faq.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@components/sectionHeader/sectionHeader';
import FaqItem from '@components/faqItem/faqItem';
import FAQData from '@data/faq';
import routes from '@data/routes';
import useScrollTo from '@hooks/useScrollTo';
import animations from '@data/animations';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hasVisibleClass, setVisibleClass] = useState(null);
  const { navigateScrollToSection } = useScrollTo();

  const handleClick = (index, e) => {
    setVisibleClass(e.currentTarget.classList.contains('visible'));
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section d-flex flex-column align-items-center justify-content-center text-center">
      <SectionHeader p={'A S K Q U E S T I O N'} h2={'I Have Answers!'} />
      <div className="faq-container">
        {FAQData.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            variants={animations.itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            <FaqItem
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={(e) => handleClick(index, e)}
              hasVisibleClass={hasVisibleClass}
            />
          </motion.div>
        ))}
      </div>
      <div className="faq-link-container">
        <button
          className="more-faq-link text-decoration-none position-relative bg-transparent border-0"
          onClick={() => navigateScrollToSection(routes.about, 'faq-section')}
        >
          MORE FAQ
        </button>
      </div>
    </section>
  );
};

export default Faq;
