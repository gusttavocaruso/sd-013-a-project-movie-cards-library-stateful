import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputText">
          Inclui o texto:
          <input
            data-testid="text-input"
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
            type="text"
          />
        </label>
        <label htmlFor="inputFavorito" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="inputFavorito"
          />
        </label>
        <label htmlFor="selectGenero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="selectGenero"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos:</option>
            <option value="action" data-testid="select-option">Ação:</option>
            <option value="comedy" data-testid="select-option">Comédia:</option>
            <option value="thriller" data-testid="select-option">Suspense:</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
