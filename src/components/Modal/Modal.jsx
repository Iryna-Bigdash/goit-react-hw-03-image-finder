import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent, ModalImg, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.onBackdropClick}>
        <ModalContent>
          <ModalImg src={src} alt={alt} />
          <CloseBtn type='button' onClick={this.props.onClose}>X</CloseBtn>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;




// import {React, Component} from 'react';
// import { createPortal } from "react-dom";
// import {ModalBackdrop, ModalContent} from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {


// componentDidMount(){
// window.addEventListener('keydown', this.onEscClick);
// }

// componentWillUnmount(){
//     window.removeEventListener('keydown', this.onEscClick);
// }

// // onEscClick = e => {
// //     if (e.code === 'Escape') {
// //         this.props.onClose();
// //     }
// // }

// onBackdropClick = e => {
// if (e.currentTarget === e.target){
//     this.props.onClose();
// }
// }

// render(){
//     const {src, tags} = this.props;
//     console.log(this.props.largeImageURL)
//     return createPortal(
//         <ModalBackdrop onClick={this.onBackdropClick}>
//             <ModalContent>{
//                <img src={src} alt={tags} />
//                 }</ModalContent>
//         </ModalBackdrop>
//         , modalRoot
//     )
// }
// }

// // const Modal = ({ onClose, onBackdropClick, largeImageURL, tags }) => {
// //     return createPortal(
// //       <ModalBackdrop onClick={onBackdropClick}>
// //         <ModalContent>
// //           <button className="close-button" onClick={onClose}>
// //             Close
// //           </button>
// //           <img src={largeImageURL} alt={tags} />
// //         </ModalContent>
// //       </ModalBackdrop>,
// //       modalRoot
// //     );
// //   };
  
// //   export default Modal;