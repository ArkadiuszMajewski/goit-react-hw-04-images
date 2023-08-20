import React, { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { tags, largeImageURL } = this.props;
    // console.log(this.props.largeImageURL);
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.protoType = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
