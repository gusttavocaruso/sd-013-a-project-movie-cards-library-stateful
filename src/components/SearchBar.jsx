import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
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
      </form>
    );
  }
}

export default SearchBar;
