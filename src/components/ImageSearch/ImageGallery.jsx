import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { hits } = this.props;
    // console.log(this.props);
    return (
      <ul className="ImageGallery">
        {hits.map(el => (
          <ImageGalleryItem
            key={el.id}
            tags={el.tags}
            webformatURL={el.webformatURL}
            largeImageURL={el.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array,
};
