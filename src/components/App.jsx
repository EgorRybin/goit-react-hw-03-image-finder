import { Component } from 'react';
import { Audio } from 'react-loader-spinner';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Searchbar from './Searchbar/Searchbar';
import getItems from './Api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    inputValue: '',
    count: 1,
    images: [],
    imgId: '',
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { count, inputValue } = this.state;

    if (prevState.count !== count || prevState.inputValue !== inputValue) {
      this.setState({ isLoading: true });
      const data = await getItems(count, inputValue);
      this.setState(prev => ({
        images: [...prev.images, ...data.data.hits],
        isLoading: false,
      }));
    }
  }

  findeId = e => {
    this.setState({ imgId: e.target.alt });
  };
  toogleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  handleSubmitValue = data => {
    this.setState({ isLoading: true });
    this.setState({ inputValue: data, images: [], count: 1, isLoading: false });
  };

  loadMore = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { images, isLoading, showModal, imgId } = this.state;
    const { toogleModal, handleSubmitValue, loadMore } = this;
    return (
      <div className={s.App}>
        <ErrorBoundary>
          {showModal && <Modal toogleModal={toogleModal} imgId={imgId} />}
          <Searchbar handleSubmitValue={handleSubmitValue} />
          <ImageGallery
            array={images}
            toogleModal={toogleModal}
            findeId={this.findeId}
          />
          {isLoading && (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="orange"
              ariaLabel="three-dots-loading"
              wrapperStyle
            />
          )}
          {images.length > 0 && <Button loadmore={loadMore} />}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
