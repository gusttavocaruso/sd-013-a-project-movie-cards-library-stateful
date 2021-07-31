import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;

    return (
      <form className="form" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input type="text" name="name" onChange="" data-testid="text-input" />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="Filmes favoritos"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange=""
          />
          Mostrar somente favoritos
        </label>

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select name="" onChange="" value={ selectedGenre } data-testid="select-input">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comedia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
