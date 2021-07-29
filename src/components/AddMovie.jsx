import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeStateProperty = this.changeStateProperty.bind(this);
  }

  getProperty = (property) => this.state.property;

  changeStateProperty = (e) => {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            data-testid="title-input"
            type="text"
            value={ this.state.title }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
