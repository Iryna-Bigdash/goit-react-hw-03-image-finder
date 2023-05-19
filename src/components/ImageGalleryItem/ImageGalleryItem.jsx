import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li key={id} onClick={this.openModal}>
          <img src={webformatURL} alt={tags} />
        </li>

        {showModal && (
          <Modal onClose={this.closeModal} src={largeImageURL} alt={tags} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

