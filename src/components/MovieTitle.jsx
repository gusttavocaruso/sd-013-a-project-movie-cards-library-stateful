import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends Component {
  render() {
    const { title, funcao } = this.props;
    return (
      <label htmlFor="movieTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="movieTitle"
          data-testid="title-input"
          value={ title }
          onChange={ funcao }
        />
      </label>
    );
  }
}

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieTitle;
