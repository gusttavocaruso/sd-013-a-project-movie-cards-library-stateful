import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieImagePath extends Component {
  render() {
    const { imagepath, funcao } = this.props;
    return (
      <label htmlFor="movieTitle" data-testid="title-input-label">
        Imagem
        <input
          type="text"
          name="movieImage"
          data-testid="image-input"
          value={ imagepath }
          onChange={ funcao }
        />
      </label>
    );
  }
}

MovieImagePath.propTypes = {
  imagepath: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieImagePath;
