/* eslint-disable react/prop-types */
import './FAQsection.css';
import useScrollAnimation from '@hooks/useScrollAnimation'
import classNames from 'classnames';
import { useState } from 'react';
import WhiteBgSectionHeader from '@components/WhiteBgSectionHeader/WhiteBgSectionHeader'

const FAQData = [
    { question: "How should I prepare for a cosmetic procedure?", answer: "Before your cosmetic procedure, ensure you follow any pre-procedure instructions, such as avoiding certain medications or foods. Arrange for transportation and post-care support. Avoid alcohol and smoking, and stay hydrated and well-rested. Finally, consult with your specialist to address any additional questions or concerns." },
    { question: "What side effects can occur after the procedure?", answer: "Possible side effects after the procedure may include temporary redness, swelling, bruising, or discomfort. These effects are usually mild and subside within a few days. For specific concerns or prolonged symptoms, please consult your practitioner." },
    { question: "How often should procedures be done to maintain results?", answer: "To maintain results, procedures typically need to be repeated every few months to a year, depending on the type and your individual needs. Your practitioner will provide personalized recommendations based on your treatment and goals."},
];

const FAQItem = ({ question, answer, isOpen, onClick, hasVisibleClass = true }) => {

    return (
        <div onClick={onClick} className={classNames('faq-item-container', {'visible': hasVisibleClass, 'open': isOpen })}>
            <div className='faq-item body-text' >
                {question}
                <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div className={classNames('faq-answer body-text', { 'open': isOpen })}>{answer}</div>
        </div>
    );
};

const FAQsection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [hasVisibleClass, setVisibleClass] = useState(null);

    useScrollAnimation('.faq-item-container'); 

    const handleClick = (index, e) => {

        setVisibleClass(e.currentTarget.classList.contains('visible'));
        setOpenIndex(openIndex === index ? null : index);   
    };

    return (
        <section className='FAQsection-section'>
            <WhiteBgSectionHeader
                p={'A S K Q U E S T I O N'}
                h2={'We Have Answers!'}
            />
            <div className='faq-container'>
                {FAQData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={(e) => handleClick(index, e)}
                        hasVisibleClass={hasVisibleClass}
                    />
                ))}
            </div>
            <div className='faq-link-container'>
                <a className="more-faq-link" href="/faq">MORE FAQ</a>
            </div>
        </section>
    );
}

export default FAQsection;