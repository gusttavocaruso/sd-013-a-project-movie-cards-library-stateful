import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InpuText from './InputText';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InpuText value={ searchText } onChange={ onSearchTextChange } />
        <label
          htmlFor="bookmarkedOnly"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos:
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label
          htmlFor="selectedGenre"
          data-testid="select-input-label"
        >
          Filtrar por gênero:
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option name="selectedGenre" value="" data-testid="select-option">
              Todos
            </option>
            <option name="selectedGenre" value="action" data-testid="select-option">
              Ação
            </option>
            <option name="selectedGenre" value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option name="selectedGenre" value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
