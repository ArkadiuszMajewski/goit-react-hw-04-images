import React, { useEffect, useState } from 'react';
import '../styles.css';

import ImageGallery from './ImageGallery';
import ButtonLoad from './Button';
import Loader from './loader';
import Modal from './Modal';

// import ImageGalleryItem from './ImageSearch/ImageGalleryItem';
// import ButtonLoad from './ImageSearch/Button';

const SearchBar = () => {
  const [hits, setHits] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [key] = useState('36819144-796cb24dbda7f1c215c0374a0');
  const [limit, setLimit] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen] = useState(false);
  const [totalHits, setTotalHits] = useState(1);

  const handleSubbmit = evt => {
    evt.preventDefault();
    if (search.trim() === '') {
      componentWillUnmount();
      alert('Nothing');
    } else setPage(1);
  };

  const componentWillUnmount = () => {
    setHits([]);
  };

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setSearch(value);
  };

  useEffect(() => {
    const fetchPhotos = async (search, page, key, limit) => {
      // setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${limit}`
        );
        const data = await response.json();

        if (data.total === 0) {
          alert('Nofing was found');
        }
        setHits(data.hits);
        setTotalHits(data.totalHits);
      } catch (error) {
        console.log('blad w fetchPhotos');
      } finally {
        setIsLoading(false);
        // console.log(hits);
      }
    };
    if (search.length > 0) {
      fetchPhotos(search, page, key, limit);
    }
    if (search.length === 0) {
      componentWillUnmount();
    }
  }, [search, limit]);

  const addExtraImg = () => {
    if (search !== '') {
      setLimit(limit + 10);
    }
    if (limit > totalHits) {
      return alert('No more found');
    }
  };

  return (
    <div>
      <header onSubmit={handleSubbmit} className="Searchbar">
        <form className="SearchForm">
          <button
            onSubmit={handleSubbmit}
            type="submit"
            className="SearchForm-button"
          >
            <span
              className="SearchForm-button- 
           label"
            ></span>
          </button>

          <input
            name="search"
            onChange={handleChange}
            value={search}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      <ImageGallery hits={hits} />
      {isLoading && <Loader />}

      <ButtonLoad addExtraImg={addExtraImg} />
      {modalIsOpen && <Modal />}
    </div>
  );
};
export default SearchBar;
