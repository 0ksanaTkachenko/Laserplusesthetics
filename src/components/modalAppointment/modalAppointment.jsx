import Modal from 'react-bootstrap/Modal';
import AppointmentForm from '../appointmentForm/appointmentForm';

const ModalAppointment = ({ isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header
        className="modal-header border-0"
        closeButton
      ></Modal.Header>
      <Modal.Body>
        <AppointmentForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalAppointment;
