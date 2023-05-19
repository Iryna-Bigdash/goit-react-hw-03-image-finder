import PropTypes from 'prop-types';
import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { getPictures } from 'services/getImg';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import LoadMoreBtn from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    pictures: null,
    loading: false,
    error: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      getPictures(this.props.value.trim(), this.state.page)
        .then(response => response.json())
        .then(pictures => {
          if (pictures.hits.length === 0) {
            return Promise.reject(
              'Unfortunately, nothing was found for your query... Please check the correctness of your input and try again!'
            );
          }
          this.setState({ pictures });
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  onLoadMoreClock = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { pictures, error, loading } = this.state;

    if (loading) {
      return <Loader />;
    }
    if (pictures) {
      return (
        <>
          <GalleryList>
            {pictures &&
              pictures.hits.map(el => (
                <ImageGalleryItem
                  key={el.id}
                  id={el.id}
                  webformatURL={el.webformatURL}
                  largeImageURL={el.largeImageURL}
                  tags={el.tags}
                />
              ))}
          </GalleryList>
          <LoadMoreBtn onClick={this.onLoadMoreClock} />
        </>
      );
    }
    if (!pictures) {
      return <ErrorPage error={error} />;
    }
  }
}

export default ImageGallery;

ImageGallery.protoType = {
  value: PropTypes.string.isRequired,
};
