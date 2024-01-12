// ModalOverlay.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { RiCloseLine } from 'react-icons/ri';
import './ModalOverlay.css';

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>
            <RiCloseLine size={24} color="#fff" />
        </div>
        {children}
        {/* <button className="close-btn" onClick={onClose}> 
          Close
  </button> */}
      </div>
    </div>
  );
};

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
