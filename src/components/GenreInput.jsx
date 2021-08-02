import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="genero"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="genero"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  handleChange: PropTypes.func,
  genre: PropTypes.string,
}.isRequired;

export default GenreInput;
