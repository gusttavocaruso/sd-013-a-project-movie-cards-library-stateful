import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {searchText, onSearchTextchange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-text"
            value={ searchText }
            onChange={ onSearchTextchange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
