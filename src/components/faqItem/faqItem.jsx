/* eslint-disable react/prop-types */
import './faqItem.css';
import classNames from 'classnames';

const FaqItem = ({ question, answer, isOpen, onClick, hasVisibleClass = true }) => {
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

export default FaqItem