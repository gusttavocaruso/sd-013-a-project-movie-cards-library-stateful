import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends Component {
  render() {
    const { title, onChangeFunc } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titulo">
        Título
        <input
          data-testid="title-input"
          id="titulo"
          type="text"
          name="title"
          value={ title }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieTitle;
