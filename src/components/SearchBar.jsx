import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    const optionText = ['Todos', 'Ação', 'Comédia', 'Suspense'];
    const optionValue = ['', 'action', 'comedy', 'thriller'];
    return (
      <form data-testid="search-bar-form" action="">
        <label data-testid="text-input-label" htmlFor="textInput">
          Inclui o texto
          <input
            data-testid="text-input"
            value={ searchText }
            id="textInput"
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="favorites">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="favorites"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="genre">
          Filtrar por gênero
          <select
            name="genre"
            id="genre"
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
}

export default SearchBar;
