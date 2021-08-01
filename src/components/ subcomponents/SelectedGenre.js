import React from 'react';
import PropTypes from 'prop-types';

class SelectedGenre extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label htmlFor="search-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="search-select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SelectedGenre.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SelectedGenre;
