import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelected 
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="text"
            id="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
