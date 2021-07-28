import React from 'react';
import PropTypes from 'prop-types';

class GenreAddMovie extends React.Component {
  render() {
    const { genreValue, onChange } = this.props;
    return (
      <label htmlFor="Genero" data-testid="genre-input-label">
        Gênero
        <select
          id="Genero"
          data-testid="genre-input"
          value={ genreValue }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreAddMovie.propTypes = {
  genreValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreAddMovie;
