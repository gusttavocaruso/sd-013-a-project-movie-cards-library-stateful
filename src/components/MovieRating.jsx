import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieRating extends Component {
  render() {
    const { rating, funcao } = this.props;
    return (
      <label htmlFor="movieRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="movieRating"
          data-testid="rating-input"
          value={ Number(rating) }
          onChange={ funcao }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  rating: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieRating;
