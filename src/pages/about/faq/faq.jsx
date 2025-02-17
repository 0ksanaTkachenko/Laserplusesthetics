/* eslint-disable react/prop-types */
import './faq.css';
import classNames from 'classnames';
import { useState } from 'react';
import FAQData from '../../../data/faq';

const FAQItem = ({ question, answer, isOpen, onClick, hasVisibleClass = true }) => {
    return (
        <div onClick={onClick} className={classNames('faq-item-container', {'visible': hasVisibleClass, 'open': isOpen })}>
            <div className='faq-item d-flex align-items-center justify-content-between cursor-pointer'>
                {question}
                <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div className={classNames('faq-answer text-justify overflow-hidden', { 'open': isOpen })}>{answer}</div>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const midIndex = Math.ceil(FAQData.length / 2);
    const column1 = FAQData.slice(0, midIndex);
    const column2 = FAQData.slice(midIndex);

    return (
        <section className="faq-section">
            <h3 className="faq-title text-center">Beauty & Skincare FAQ</h3>
            <div className="faq-description text-center">
                Every skin is unique, and it’s completely normal to have questions before a procedure.
                Here, I’ve gathered the most common ones to help you feel informed, confident, and prepared.
                If you don’t find what you’re looking for, feel free to reach out—I’m always happy to help!
            </div>
            <div className="faq-container d-flex">
                <div className="faq-column faq-column-1">
                    {column1.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
                <div className="faq-column faq-column-2">
                    {column2.map((item, index) => (
                        <FAQItem
                            key={index + midIndex}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index + midIndex}
                            onClick={() => handleClick(index + midIndex)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq