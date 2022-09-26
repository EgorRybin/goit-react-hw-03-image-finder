import { Component } from 'react';

const INITIAL_STATE = {
  inputValue: '',
};
class Searchbar extends Component {
  state ={...INITIAL_STATE}

  handleChange = evt => {
      this.setState({ inputValue: evt.target.value });
  };

  hendleSubmit = e => {
      e.preventDefault();
      this.props.handleSubmitValue(this.state.inputValue);
      this.reset();   
  };

    reset = () => {
    this.setState({ ...INITIAL_STATE });
  };


  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.hendleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              name="inputValue"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              value={this.inputValue}
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
