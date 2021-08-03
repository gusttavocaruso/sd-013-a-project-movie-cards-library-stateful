import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenderRating extends Component {
  render() {
    const { rating, genre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="select-rating">
          Avaliação
          <input
            id="select-rating"
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            id="genre-input"
            name="genre"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenderRating.propTypes = {
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GenderRating;
