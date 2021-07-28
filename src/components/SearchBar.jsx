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
        <label htmlFor="">
          Inclui o texto:
          <input type="text" name="" id="" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
