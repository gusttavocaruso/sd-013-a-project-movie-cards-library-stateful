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
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto:
          <input data-testid="text-input" type="text" name="" id="" value={ searchText } onChange={ onSearchTextChange } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
