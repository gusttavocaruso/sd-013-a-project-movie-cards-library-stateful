import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form action="" data-testid="search-bar-form">
          <label htmlFor="search-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="search-input"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              id="search-checkbox"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>

          <label htmlFor="search-select" data-testid="select-input-label">
            Filtrar por gênero:
            <select
              data-testid="select-input"
              id="search-select"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired, // será uma callback
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired, // será uma callback
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired, // serpa uma callback
};

export default SearchBar;
