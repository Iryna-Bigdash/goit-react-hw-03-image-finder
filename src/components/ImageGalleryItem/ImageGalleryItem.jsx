import React from 'react';
// import { galleryItem, galleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <>
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
    </>
  );
};

export default ImageGalleryItem;