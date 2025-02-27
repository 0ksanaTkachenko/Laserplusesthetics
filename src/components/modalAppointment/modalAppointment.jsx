/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import AppointmentForm from '../appointmentForm/appointmentForm';

const ModalAppointment = ({ isOpen, onClose }) => {
  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    alert('Appointment request sent!');
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header
        className="modal-header border-0"
        closeButton
      ></Modal.Header>
      <Modal.Body>
        <AppointmentForm onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAppointment;
