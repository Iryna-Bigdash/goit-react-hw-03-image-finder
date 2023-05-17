import { Component } from 'react';
import { GalleryList } from './ImageGallery.styled';
import { getPictures } from 'services/getImg';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";


class ImageGallery extends Component {
  state = {
    pictures: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      getPictures(this.props.value)
        .then((response) => response.json())
        .then((pictures) => {
          this.setState({pictures});
          console.log(pictures)
        });
    }
  }

  render() {
    return (
      <>
        {/* <GalleryList> */}
    <ImageGalleryItem data={this.pictures}/>

    <GalleryList>
    {this.state.pictures &&
    this.state.pictures.hits.map(el => (
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
}

export default ImageGallery;
