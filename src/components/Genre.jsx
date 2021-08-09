import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, onChange } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          id="genre"
          name="genre"
          data-testid="genre-input"
          onChange={ onChange }
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
  rating: Proptypes.number,
  onChange: Proptypes.func,
}.isRequired;

export default Genre;
