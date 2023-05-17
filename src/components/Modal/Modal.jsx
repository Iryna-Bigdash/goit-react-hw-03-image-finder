import { Component } from "react";
import { createPortal } from "react-dom";
import {ModalBackdrop, ModalContent} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {


componentDidMount(){
window.addEventListener('keydown', this.onEscClick);
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.onEscClick);
}

onEscClick = e => {
    if (e.code === 'Escape') {
        this.props.onClose();
    }
}

onBackdropClick = e => {
if (e.currentTarget === e.target){
    this.props.onClose();
}
}
      


render(){
    return createPortal(
        <ModalBackdrop onClick={this.onBackdropClick}>
            <ModalContent>{this.props.children}</ModalContent>
        </ModalBackdrop>
        , modalRoot
    )
}
}