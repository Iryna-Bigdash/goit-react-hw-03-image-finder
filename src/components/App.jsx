import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import IconCloseButton from './IconCloseButton/IconCloseButton';
import { ReactComponent as CloseIcon } from './icons/symbol-defs.svg#icon-close_burger';
import ImageGallery from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';




export default class App extends Component {
  state = {
    textSearch: '',
    showModal: false,
  };

  handleSubmit = (textSearch) => {
this.setState({textSearch})
  }

  toggleModal = () => {
    this.setState(({showModal} ) => (
      {showModal: !showModal}
    ) );
  };

  render() {
console.log(this.state)

    const {showModal} = this.state;
    return (
      <>
      <Toaster toastOptions={{  
    duration: 2000,
    position: 'top-right',
    style: {
      width: '500px',
      padding: '10px',
      background: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
      color: 'black',
    }
    }} />

    <Searchbar onSearch={this.handleSubmit}/>
    <ImageGallery value={this.state.textSearch}/>
      
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
