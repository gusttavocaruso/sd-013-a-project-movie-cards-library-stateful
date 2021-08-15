import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="textInput"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            id="textInput"
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="checkboxInput"
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="select"
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
  searchText: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onSearchTextChange: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
  bookmarkedOnly: PropTypes.arrayOf(
    PropTypes.bool,
  ).isRequired,
  onBookmarkedChange: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
  selectedGenre: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onSelectedGenreChange: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
};

export default SearchBar;
