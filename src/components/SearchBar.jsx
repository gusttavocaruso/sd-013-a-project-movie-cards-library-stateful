// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
// componente SearchBar, passando as props desestruturadas
function SearchBar({ searchText, onSearchTextChange,
  bookmarkedOnly, onBookmarkedChange, selectedGenre,
  onSelectedGenreChange }) {
  return (
    <form action="" data-testid="search-bar-form">
      <label htmlFor="inputText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="inputText"
          id="inputText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
      <label htmlFor="check" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
      <label
        htmlFor="selectBtn"
        value="Filtrar por gênero"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="selectBtn"
          id="inputText"
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
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: [],
  onSearchTextChange: [],
  bookmarkedOnly: [],
  onBookmarkedChange: [],
  selectedGenre: [],
  onSelectedGenreChange: [],
};

export default SearchBar;
