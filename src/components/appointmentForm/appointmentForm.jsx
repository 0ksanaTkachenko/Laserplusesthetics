/* eslint-disable react/prop-types */
import './appointmentForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cosmetologyImg from '@assets/images/cosmetology-form.png';
import { useState } from 'react';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too short!').required('Required'),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  preferredLanguage: Yup.string()
    .oneOf(['english', 'russian'], 'Please select a language')
    .required('Required'),
  comments: Yup.string(),
  consent: Yup.bool().oneOf([true], 'You must agree to data processing'),
});

const AppointmentForm = ({ isformSmall = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const TELEGRAM_TOKEN = '8002788686:AAF4KhOZs96u60QHTliHneJC6qSUWgPqjds';
  const TELEGRAM_CHAT_ID = '618161386';

  const handleSubmit = (values, { resetForm }) => {
    if (values.botcheck) return;

    const message = `📩 Appointment Request:
  👤 Name: ${values.name}
  📞 Phone: ${values.phone}
  📧 Email: ${values.email}
  🌐 Language: ${values.preferredLanguage}
  📝 Comments: ${values.comments || 'No comments.'}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent via Telegram!');
        } else {
          alert('Failed to send message.');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Network error.');
      });

    setIsSubmitted(true); // блокировка повторной отправки
    console.log('Sending values:', values);

    resetForm();

    setTimeout(() => {
      setIsSubmitted(false); // разблокировка через 10 сек
    }, 10000);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        preferredLanguage: '',
        comments: '',
        consent: false,
        botcheck: '',
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          className={`appointment-form d-flex position-relative ${isformSmall ? 'small-form' : ''}`}
        >
          <div className="form-content d-flex">
            <div className="form-main">
              {/* Поля формы */}
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
                <Field
                  as="select"
                  name="preferredLanguage"
                  className="form-control"
                >
                  <option value=""></option>
                  <option value="english">English</option>
                  <option value="russian">Русский</option>
                </Field>
                <ErrorMessage
                  name="preferredLanguage"
                  component="div"
                  className="error"
                />
              </div>
              <div className="textarea-div">
                <label>Comments or Special Requests:</label>
                <Field
                  as="textarea"
                  name="comments"
                  className="form-control textarea"
                />
              </div>
              <div className="form-check mt-3">
                <Field
                  type="checkbox"
                  name="consent"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  I agree to the processing of my personal data in accordance
                  with the Privacy Policy.
                  <br />
                  <small className="privacy-inline-note">
                    We collect your data only to process appointments and
                    contact you. Your information is securely stored and never
                    shared with third parties.
                  </small>
                </label>
              </div>
              <ErrorMessage name="consent" component="div" className="error" />
            </div>
            <div className="form-footer">
              <button
                type="submit"
                className="modal-btn"
                disabled={isSubmitting || isSubmitted}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="form-img-container">
            <img src={cosmetologyImg} className="cosmetology-img" alt="" />
          </div>
          <Field type="text" name="botcheck" style={{ display: 'none' }} />
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentForm;
