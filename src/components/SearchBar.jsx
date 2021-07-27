import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectedGenre"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
