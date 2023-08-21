import React, { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

const Modal = ({ tags, largeImageURL }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;

Modal.protoType = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
