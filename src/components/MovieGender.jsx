import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieGender extends Component {
  render() {
    const { gender, funcao } = this.props;
    return (
      <label htmlFor="selectGender" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ gender }
          onChange={ funcao }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

MovieGender.propTypes = {
  gender: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default MovieGender;
