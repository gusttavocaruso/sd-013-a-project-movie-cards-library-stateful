import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RatingandGenre.css';

class RatingandGenre extends Component {
  render() {
    const { rating, genre, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="input-rating"
          data-testid="rating-input-label"
          className="label-form"
        >
          Avaliação
          <input
            name="rating"
            type="number"
            id="input-rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="select-genre"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            name="genre"
            id="select-genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
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

RatingandGenre.propTypes = {
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingandGenre;
