import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, onBookmarkedChange,
      onSearchTextChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-search" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text-search"
          />
        </label>
        <label htmlFor="input-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="input-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="selected-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="selected-genre"
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
