// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <main>
        <form action="" method="post" data-testid="search-bar-form">
          <input type="text" />
        </form>
      </main>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.callback,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.callback,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.callback,
}.isRequired;

export default SearchBar;
