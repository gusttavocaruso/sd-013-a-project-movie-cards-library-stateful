import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="xxx" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="xxx"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        {/* { bookmarkedOnly }
        { selectedGenre } */}
      </form>

      // <div>
      //   { searchText }
      //   { bookmarkedOnly }
      //   { selectedGenre }
      // </div>
    );
  }
}

export default SearchBar;
