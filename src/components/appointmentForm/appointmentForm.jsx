import './appointmentForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cosmetologyImg from '@assets/images/cosmetology-form.png';
import cosmetologyBackImg from '@assets/images/cosmetology-form-thanks.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const handleSubmit = async (
  values,
  { resetForm },
  setFormSent,
  setIsSubmitted
) => {
  if (values.botcheck) return;

  const TELEGRAM_TOKEN = '8002788686:AAF4KhOZs96u60QHTliHneJC6qSUWgPqjds';
  const TELEGRAM_CHAT_ID = '618161386';

  const message = `📩 Appointment Request:
  👤 Name: ${values.name}
  📞 Phone: ${values.phone}
  📧 Email: ${values.email}
  🌐 Language: ${values.preferredLanguage}
  📝 Comments: ${values.comments || 'No comments.'}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (res.ok) {
      toast.success('Message sent!');
      setFormSent(true);
    } else {
      toast.error('Failed to send message. Please try again.');
    }
  } catch (error) {
    toast.error('Network error.');
  }

  setIsSubmitted(true);
  resetForm();

  setTimeout(() => {
    setIsSubmitted(false);
  }, 10000);
};

const AppointmentForm = ({ isformSmall = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formSent, setFormSent] = useState(false);

  if (formSent) {
    return (
      <div className="thank-you-message d-flex">
        <div className="form-back-img d-flex align-items-center justify-content-center">
          <img src={cosmetologyBackImg} className="img-fluid h-auto" alt="" />
        </div>
        <div className="form-back-text d-flex align-items-center justify-content-center flex-column">
          <h3 className="text-center">Your message has been sent!</h3>
          <p>I will contact you shortly</p>
        </div>
      </div>
    );
  }

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
      onSubmit={(values, formikHelpers) =>
        handleSubmit(values, formikHelpers, setFormSent, setIsSubmitted)
      }
    >
      {({ isSubmitting }) => (
        <Form
          className={`appointment-form d-flex flex-wrap position-relative ${isformSmall ? 'small-form' : ''}`}
        >
          <div className="form-content d-flex flex-column justify-content-between">
            <div className="form-main d-flex justify-content-between flex-wrap">
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
              <div className="textarea-div w-100">
                <label>Comments or Special Requests:</label>
                <Field name="comments">
                  {({ field }) => (
                    <textarea
                      {...field}
                      className="form-control textarea w-100"
                      maxLength={200}
                    />
                  )}
                </Field>
              </div>
              <div className="form-check mt-3 w-100">
                <Field
                  type="checkbox"
                  name="consent"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  I agree to the processing of my personal data in accordance
                  with the Privacy Policy.
                  <br />
                  <small className="privacy-inline-note d-block">
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
                className="modal-btn position-relative"
                disabled={isSubmitting || isSubmitted}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="form-img-container d-flex align-items-center">
            <img src={cosmetologyImg} className="cosmetology-img" alt="" />
          </div>
          <Field type="text" name="botcheck" style={{ display: 'none' }} />
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentForm;
