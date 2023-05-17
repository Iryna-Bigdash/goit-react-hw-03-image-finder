import { Component } from 'react';
import Modal from './Modal/Modal';
import IconCloseButton from './IconCloseButton/IconCloseButton';
import { ReactComponent as CloseIcon } from './icons/symbol-defs.svg#icon-close_burger';



export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal} ) => (
      {showModal: !showModal}
    ) );
  };

  render() {
    const {showModal} = this.state;
    return (
      <>
      <button type='button' onClick={this.toggleModal}>Open Modal</button>
       {showModal && (
       <Modal onClose={this.toggleModal}> 
        <h1>Hello</h1>
        <img src="" alt="" />
        <IconCloseButton onClick={this.toggleModal} aria-label="Close modal window">
        <CloseIcon width="40px" height="40px"/>
        </IconCloseButton>
       </Modal>)}
      </>
    );
  }
}
