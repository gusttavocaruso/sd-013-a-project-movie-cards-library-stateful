// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <h1>Filtros Avançados</h1>
        {/* aqui é um componente */}
        <label
          htmlFor="search-term"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="search-text"
            id="search-term"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* aqui é um componente */}
        <label
          data-testid="checkbox-input-label"
          htmlFor="bookmark"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmark"
            id="bookmark"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        {/* aqui é um componente */}
        <label htmlFor="genres" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
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

export default SearchBar;
