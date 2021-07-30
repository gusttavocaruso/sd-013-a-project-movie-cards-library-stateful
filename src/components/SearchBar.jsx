import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookMarkedChange,
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
      </form>
    );
  }
}

export default SearchBar;
