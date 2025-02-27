/* eslint-disable react/prop-types */
import './faq.css';
import { useState } from 'react';
import SectionHeader from '../../../components/sectionHeader/sectionHeader';
import FaqItem from '../../../components/faqItem/faqItem';
import FAQData from '../../../data/faq';
import routes from '../../../data/routes';
import useScrollTo from '../../../hooks/useScrollTo';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hasVisibleClass, setVisibleClass] = useState(null);
  const { navigateScrollToSection } = useScrollTo();

  const handleClick = (index, e) => {
    setVisibleClass(e.currentTarget.classList.contains('visible'));
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <SectionHeader p={'A S K Q U E S T I O N'} h2={'I Have Answers!'} />
      <div className="faq-container">
        {FAQData.slice(0, 3).map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={(e) => handleClick(index, e)}
            hasVisibleClass={hasVisibleClass}
          />
        ))}
      </div>
      <div className="faq-link-container">
        <button
          className="more-faq-link"
          onClick={() => navigateScrollToSection(routes.about, 'faq-section')}
        >
          MORE FAQ
        </button>
      </div>
    </section>
  );
};

export default Faq;
