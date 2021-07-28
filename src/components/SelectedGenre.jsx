import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectedGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="selectGenre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="selectGenre"
          data-testid="genre-input"
          value={ value }
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

SelectedGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
