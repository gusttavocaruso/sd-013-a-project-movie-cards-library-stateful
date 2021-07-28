import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookMarked from './SearchBarForms/BookMarked';
import SearchText from './SearchBarForms/SearchText';
import SelectedGenre from './SearchBarForms/SelectedGenre';

class SearchBar extends Component {
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
      <form data-testid="search-bar-form">
        <SearchText value={ searchText } onChange={ onSearchTextChange } />
        <BookMarked checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectedGenre value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
