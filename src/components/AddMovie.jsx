import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="inputTitulo" data-testid="title-input-label">
          Título
          <input id="inputTitulo" data-testid="title-input" type="text" title={ title } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
