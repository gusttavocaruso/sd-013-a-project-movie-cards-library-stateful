import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {searchText, onSearchTextchange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form">
        asd
      </form>
    );
  }
}

export default SearchBar;
