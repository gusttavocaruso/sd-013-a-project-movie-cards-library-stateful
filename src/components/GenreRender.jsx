import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreRender extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreRender.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
};

GenreRender.defaultProps = {
  genre: '',
  handleChange: () => {},
};

export default GenreRender;
