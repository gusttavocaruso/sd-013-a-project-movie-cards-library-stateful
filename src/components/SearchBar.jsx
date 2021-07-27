import React from 'react';

class SearchBar extends React.Component {
  render() {
    /* const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
     } = this.props; */

    return (
      <form data-testid="earch-bar-form">
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
      </form>
    );
  }
}
export default SearchBar;
