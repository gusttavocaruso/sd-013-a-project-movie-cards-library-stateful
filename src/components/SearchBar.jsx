import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="xxx" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="xxx"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="yyy" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="yyy"
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
