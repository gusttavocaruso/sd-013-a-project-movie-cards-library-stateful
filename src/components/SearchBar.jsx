import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" id="form-searchBar">
        <label htmlFor="input-search" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input-search"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="check-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            id="check-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

        <label htmlFor="search-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            name=""
            id="search-select"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
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
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
