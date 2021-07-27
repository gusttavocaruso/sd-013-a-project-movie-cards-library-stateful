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
      </form>
    );
  }
}

export default SearchBar;
