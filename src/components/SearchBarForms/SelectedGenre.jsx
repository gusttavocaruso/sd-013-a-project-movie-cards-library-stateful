import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}
// https://stackoverflow.com/questions/49761473/getting-error-proptypes-is-not-defined-in-react
SelectedGenre.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedGenre;
