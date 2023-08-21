import React, { useState } from 'react';
import '../styles.css';
import Modal from './Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // console.log(key);
  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li
      onKeyUp={e => console.log(e)}
      onClick={handleModal}
      className="ImageGalleryItem"
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      {modalIsOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={closeModal}
        />
      )}
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
