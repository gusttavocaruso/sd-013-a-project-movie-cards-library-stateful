import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenre extends Component {
  render() {
    const { genre, handleChange } = this.props;

    <select
    value={ selectedGenre }
    onChange={ onSelectedGenreChange }
    data-testid="select-input"
  >
    <option name="selectedGenre" value="" data-testid="select-option">
      Todos
    </option>
    <option name="selectedGenre" value="action" data-testid="select-option">
      Ação
    </option>
    <option name="selectedGenre" value="comedy" data-testid="select-option">
      Comédia
    </option>
    <option name="selectedGenre" value="thriller" data-testid="select-option">
      Suspense
    </option>
  </select>



    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          onClick={ handleChange }
          genre={ genre }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGenre;
