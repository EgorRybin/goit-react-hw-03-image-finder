import { Component } from 'react';
import { Audio } from 'react-loader-spinner';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Searchbar from './Searchbar/Searchbar';
import getItems from './Api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import s from './App.module.css';

class App extends Component {
  state = {
    inputValue: '',
    count: 1,
    images: [],
    isLoading: false,
  };

  handleSubmitValue = data => {
    this.setState({ isLoading: true });
    this.setState({ inputValue: data, images: [], count: 1, isLoading: false });
  };

  loadMore = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
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

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={s.App}>
        <ErrorBoundary>
          <Searchbar handleSubmitValue={this.handleSubmitValue} />
          <ImageGallery array={images} />
          {isLoading && (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="orange"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          )}
          {images.length > 0 && <Button loadmore={this.loadMore} />}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
