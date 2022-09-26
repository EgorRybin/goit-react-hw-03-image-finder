import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
const axios = require('axios').default;

const PIXABAY_KYE = '29634841-061e0c7ab4009b86045ba35d0';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleSubmitValue = data => {
   this.setState({inputValue: data})
  };


  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=1&key=${PIXABAY_KYE}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {})
      .catch(error => {});
  }

  render() {
    return (
      <>
        <Searchbar handleSubmitValue={this.handleSubmitValue} />
      </>
    );
  }
}

export default App;
