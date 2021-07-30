import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-search" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input-search"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="check-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            id="check-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
