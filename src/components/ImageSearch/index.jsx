import React, { Component } from 'react';
import '../styles.css';

import ImageGallery from './ImageGallery';
import ButtonLoad from './Button';
import Loader from './loader';
import Modal from './Modal';

// import ImageGalleryItem from './ImageSearch/ImageGalleryItem';
// import ButtonLoad from './ImageSearch/Button';

class SearchBar extends Component {
  state = {
    hits: [],
    search: '',
    page: 1,
    key: '36819144-796cb24dbda7f1c215c0374a0',
    limit: 12,
    isLoading: false,
    modalIsOpen: false,
    totalHits: 1,
  };

  handleSubbmit = evt => {
    evt.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Nothing');
    }
    this.fetchPhotos();
    this.setState(page => ({ [page]: 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit) {
      this.fetchPhotos();
    }
  }

  handleChange = evt => {
    const { name, value, page } = evt.currentTarget;
    this.setState({ [name]: value, [page]: 1 });
  };

  addExtraImg = () => {
    if (this.state.search !== '') {
      this.setState(prevState => ({
        ...prevState,
        limit: prevState.limit + 10,
      }));
    }

    // console.log(this.state.totalHits);
    if (this.state.limit > this.state.totalHits) {
      return alert('No more found');
    }
  };

  componentWillUnmount() {
    this.setState({ hits: [] });
  }

  fetchPhotos = async () => {
    this.setState({ isLoading: true });
    try {
      const { search, page, key, limit } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${limit}`
      );
      const data = await response.json();

      if (data.total === 0) {
        alert('Nofing was found');
      }
      // console.log(data);

      this.setState(prevState => ({
        ...prevState,
        hits: data.hits,
        totalHits: data.totalHits,
      }));
    } catch (error) {
      console.log('blad w fetchPhotos');
    } finally {
      this.setState({ isLoading: false });
      // console.log(this.state.isLoading);
    }
  };

  render() {
    const { hits } = this.state;
    // console.log(hits);
    return (
      <div>
        <header onSubmit={this.handleSubbmit} className="Searchbar">
          <form className="SearchForm">
            <button
              onSubmit={this.handleSubbmit}
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
              onChange={this.handleChange}
              value={this.state.search}
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <ImageGallery hits={hits} />
        {this.state.isLoading && <Loader />}

        <ButtonLoad addExtraImg={this.addExtraImg} />
        {this.state.modalIsOpen && <Modal />}
      </div>
    );
  }
}
export default SearchBar;

// SearchBar.PropTypes = {};
