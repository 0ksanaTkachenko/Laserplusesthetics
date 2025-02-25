/* eslint-disable react/prop-types */
import './modalAppointment.css';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cosmetologyImg from '@assets/images/cosmetology-form.png'

const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too short!').required('Required'),
    phone: Yup.string()
        .matches(/^\+?\d{10,15}$/, 'Invalid phone number')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    preferredLanguage: Yup.string().oneOf(['english', 'russian'], 'Please select a language').required('Required'),
    comments: Yup.string(),
    consent: Yup.bool().oneOf([true], 'You must agree to data processing')
});

const ModalAppointment = ({ isOpen, onClose }) => {
    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header className='modal-header border-0' closeButton></Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        email: '',
                        preferredLanguage: '',
                        comments: '',
                        consent: false
                    }}
                    validationSchema={validationSchema}
                    validateOnChange={false} 
                    validateOnBlur={false}  
                    onSubmit={(values, { resetForm }) => {
                        console.log('Form Data:', values);
                        alert('Appointment request sent!');
                        resetForm();
                        onClose();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <img src={cosmetologyImg} className='cosmetology-img' alt="" />
                            <div className='form-content'>
                                <div>
                                    <label>Full Name</label>
                                    <Field type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>
                                <div>
                                    <label>Phone Number</label>
                                    <Field type="text" name="phone" className="form-control" />
                                    <ErrorMessage name="phone" component="div" className="error" />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </div>
                                <div>
                                <label>Preferred Language</label>
                                    <Field as="select" name="preferredLanguage" className="form-control">
                                        <option value=""></option>
                                        <option value="english">English</option>
                                        <option value="russian">Русский</option>
                                    </Field>
                                    <ErrorMessage name="preferredLanguage" component="div" className="error" />
                                </div>
                                <div className='textarea-div'>
                                    <label>Comments or Special Requests:</label>
                                    <Field as="textarea" name="comments" className="form-control textarea" />
                                </div>
                                <div className="form-check mt-3">
                                    <Field type="checkbox" name="consent" className="form-check-input" />
                                    <label className="form-check-label">I agree to data processing.</label>
                                </div>
                                <ErrorMessage name="consent" component="div" className="error" />
                            </div>
                            <Modal.Footer className="modal-footer border-0">
                                <p>By submitting this form, you agree to our Privacy Policy and Terms of Service</p>
                                <button type="submit" className="modal-btn" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};


  
export default ModalAppointment