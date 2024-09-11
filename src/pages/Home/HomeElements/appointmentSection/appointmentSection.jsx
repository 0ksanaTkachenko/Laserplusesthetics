/* eslint-disable react/prop-types */
import './appointmentSection.css';
import '@/styles/global.css'
import avocadoGirl from '@assets/images/HomePage/appoitment-section/avocado-girl.png';
import GoldButton from '@components/GoldButton/GoldButton'
import { useState } from 'react';

const AppointmentModal = ({ onClose, isOpen }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        preferredLanguage: '',
        preferredDate: '',
        preferredTime: '',
        procedure: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 4) {
            console.log('Form data submitted:', formData);
            // Здесь можно обработать отправку формы
        } else {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            onClose()
            setFormData({
                fullName: '',
                mobileNumber: '',
                preferredLanguage: '',
                preferredDate: '',
                preferredTime: '',
                procedure: '',
                message: '',
            });
        }
    };

    return (
        <div className={`appointment-modal-container ${isOpen ? 'show' : 'hide'}`}>
            <div className="appointment-modal-content">
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <h1 className='modal-step-header section-header'>Client Information</h1>
                            <div className='form-step-header section-text'>Please fill in your contact details:</div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Full Name:</label>
                                <input className='medium-text'
                                    type="text" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder='Enter your full name'
                                />
                            </div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Mobile Number: </label>
                                <input className='medium-text'
                                    type="tel" 
                                    name="mobileNumber" 
                                    value={formData.mobileNumber} 
                                    onChange={handleChange} 
                                    placeholder='Enter your mobile number'
                                    pattern="\+?\d{1,4}[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,9}"
                                    required 
                                />
                            </div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Preferred Language: </label>
                                <select className='medium-text'
                                    name="preferredLanguage" 
                                    value={formData.preferredLanguage} 
                                    onChange={handleChange} 
                                    required
                                >
                                    <option value="">Select Language</option>
                                    <option value="english">English</option>
                                    <option value="russian">Russian</option>
                                </select>
                            </div>
                        </>
                    )}
                    
                    {step === 2 && (
                        <>
                            <h1 className='modal-step-header section-header'>Time</h1>
                            <div className='form-step-header section-text'>Please fill in your preferred date and time:</div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Preferred Date:</label>
                                <input className='medium-text'
                                    type="date" 
                                    name="preferredDate" 
                                    value={formData.preferredDate} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Preferred Time of Day: </label>
                                <select className='medium-text'
                                    name="preferredTime" 
                                    value={formData.preferredTime} 
                                    onChange={handleChange} 
                                        required
                                >
                                    <option value="">Select Time</option>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                    <option value="any time">Any time</option>
                                </select>
                                <p className='small-text'>
                                    Please note that if the selected date and time are not available, the specialist will offer you the closest available time.
                                </p>
                            </div>  
                        </>
                    )}
                    
                    {step === 3 && (
                        <>
                            <h1 className='modal-step-header section-header'>Procedure</h1>
                            <div className='form-step-header section-text'>Please fill in your preferred procedure:</div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>Procedure:</label>
                                <select className='medium-text'
                                    name="procedure" 
                                    value={formData.procedure} 
                                    onChange={handleChange} 
                                    required
                                >
                                    <option value="">Select Procedure</option>
                                    <option value="procedure1">Procedure 1</option>
                                    <option value="procedure2">Procedure 2</option>
                                    <option value="procedure3">Procedure 3</option>
                                </select>
                            </div>
                            <div className='modal-form-input-container'>
                                <label className='medium-text'>If you have any additional requests you would like to share with us, please write them below.</label>
                                <textarea className='medium-text'
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    placeholder="Enter your message here"
                                />
                            </div> 
                            <p className='small-text'>By submitting this form, you agree to our Privacy Policy and Terms of Service</p>
                        </>
                    )}

                    {step < 4 && (
                        <div className='modal-btns'>
                            <button className='medium-text back-modal-btn' type="button" onClick={handleBack}>{step === 1 ? 'Cansel' : 'Back'}</button>
                            <button className={'medium-text ' + (step === 3 ? 'submit-modal-btn' : 'next-modal-btn')} type="submit">{step === 3 ? 'Submit' : 'Next'}</button>
                        </div>
                    )}

                    {step === 4 && (
                        <div className='modal-done-container'>
                            <h1 className='modal-step-header section-header'>Done!</h1>
                            <div className='modal-done-message'>Thank you for submitting your information! We appreciate you taking the time to provide us with your details. Our team will review your submission and get in touch with you shortly. Have a great day!</div>
                            <button onClick={onClose} className="close-button medium-text back-modal-btn">Cansel</button>
                        </div>
                    )} 
                </form>  
            </div>
        </div>
    );
};

const AppointmentSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const appointmentBtnHandleClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="appointment-section">
            <div className="home-page-container">
                <div className='appointment text-container'>
                    <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
                    <h1 className='section-header'>Your Beauty Journey<br />Starts Here</h1>
                    <p className='section-text'>Unlock your true beauty potential with our professional treatments. Book your appointment today and shine like never before.</p>
                    <div className='appoitment-btn-container'>
                        <GoldButton onClick={appointmentBtnHandleClick} className={'medium-goldBtn'} bounce={true}>Make an Appointment</GoldButton>
                    </div> 
                </div>
                <div className='img-container'>
                    <picture>
                        <img className={"avocado-girl-img"} src={avocadoGirl} alt="" />
                    </picture>
                </div> 
            </div>  
            
        </section>
    )
}

export default AppointmentSection