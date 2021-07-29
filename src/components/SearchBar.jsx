// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchTextInput from './SearchBar/SearchTextInput';
import BookMarkedCheck from './SearchBar/BookMarkedCheck';
import GenreInput from './SearchBar/GenreInput';
import './SearchBar/SearchBar.css';

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
      <form className="search-bar-form" data-testid="search-bar-form">
        <SearchTextInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <BookMarkedCheck
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <GenreInput
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
