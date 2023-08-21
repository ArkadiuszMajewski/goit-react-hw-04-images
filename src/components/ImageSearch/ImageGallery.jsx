import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits }) => {
  // console.log(hits);
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
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array,
};
