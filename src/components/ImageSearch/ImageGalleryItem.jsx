import React, { Component } from 'react';
import '../styles.css';
import Modal from './Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = { modalIsOpen: false };

  handleModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    // console.log(this.props);
    const { webformatURL, tags, id, largeImageURL } = this.props;

    return (
      <li
        id={id}
        onKeyUp={e => console.log(e)}
        onClick={this.handleModal}
        className="ImageGalleryItem"
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
        {this.state.modalIsOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.handleModal}
          />
        )}
      </li>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};
