import React from 'react';

import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genero" data-testid="genre-input-label">
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

Genre.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Genre;
