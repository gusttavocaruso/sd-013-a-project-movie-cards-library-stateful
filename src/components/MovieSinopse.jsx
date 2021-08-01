import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieSinopse extends Component {
  render() {
    const { sinopse, funcao } = this.props;
    return (
      <label htmlFor="movieRating" data-testid="storyline-input-label">
        Sinopse
        <input
          type="number"
          name="storyline"
          data-testid="storyline-input"
          value={ sinopse }
          min="0"
          max="10"
          onChange={ funcao }
        />
      </label>
    );
  }
}

MovieSinopse.propTypes = {
  sinopse: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieSinopse;
