import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    const { genre, onChangeFunc } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          name="genre"
          value={ genre }
          onChange={ onChangeFunc }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieGenre;
