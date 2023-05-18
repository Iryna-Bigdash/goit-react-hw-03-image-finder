import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { getPictures } from 'services/getImg';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import ErrorPage from "components/ErrorPage/ErrorPage";

class ImageGallery extends Component {
  state = {
    pictures: null,
    error: '',
    status: 'idel',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      getPictures(this.props.value.trim())
        .then(response => response.json())
        .then(pictures => {
          if (pictures.hits.length === 0) {
            return Promise.reject(
              'Unfortunately, nothing was found for your query... Please check the correctness of your input and try again!'
            );
          }
          this.setState({ pictures, status: 'resolved' });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  render() {
const { status, pictures, error } = this.state;

    if (status === 'pending') { return <Loader /> }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryItem data={pictures} />
          <GalleryList>
            {pictures && pictures.hits.map(el => (
                <ImageGalleryItem
                  key={el.id}
                  id={el.id}
                  webformatURL={el.webformatURL}
                  tags={el.tags}
                />
              ))}
          </GalleryList>
        </>
      );
    }
    if (status === 'rejected') { return <ErrorPage error={error}/>}
  }
}

export default ImageGallery;
