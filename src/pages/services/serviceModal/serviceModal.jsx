import './serviceModal.css';
import { Modal } from 'react-bootstrap';

const ServicesModal = ({ show, handleClose, subService }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="fixed-height-modal"
    >
      <Modal.Header className="services-modal-header" closeButton>
        <Modal.Title className="services-modal-title">
          {subService.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-scrollable">
        <div className="services-modal-container services-modal-container d-flex position-relative h-100 overflow-hidden">
          <div className="services-modal-text-container d-flex align-items-center justify-content-center overflow-auto">
            <p>{subService.description}</p>
          </div>
          <div className="session-details-container position-relative">
            <div className="top-0 start-0 d-flex align-items-center">
              Duration: {subService.duration}
            </div>
            <div className="bottom-0 end-0 d-flex align-items-center">
              Sessions: {subService.minSessions}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ServicesModal;
