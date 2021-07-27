import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,} = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange,} = this.props;
    return (
      <form data-testid="search-bar-form" action="">
        <label data-testid="text-input-label" htmlFor="i">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            type="text"
            id="i"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="favoritos">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="favoritos"
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genero">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            name="nome"
            id="genero"
            onChange={ onSelectedGenreChange }
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

export default SearchBar;
