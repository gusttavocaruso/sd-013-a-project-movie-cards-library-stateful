import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state{
      
    }
  }

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
            name="searchText"
            onChange={ onSearchTextChange }
            value={ searchText }
            id="inputText"
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
export default SearchBar;
