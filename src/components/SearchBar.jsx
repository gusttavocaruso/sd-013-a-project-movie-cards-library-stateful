import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textLabel">
          Inclui o texto
          <input
            data-testid="text-input"
            id="textLabel"
            type="text"
            name="searchInput"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favorite">
          <input
            data-testid="checkbox-input"
            id="favorite"
            type="checkbox"
            name="searchFavoriteMovie"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" htmlFor="genero">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="genero"
            name="searchGenre"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
