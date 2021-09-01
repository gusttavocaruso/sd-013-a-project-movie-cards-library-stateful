import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
      const {
          searchText,
          onSearchTextChange,
          bookmarkedOnly,
          onBookmarkedChange,
          selectedGenre,
          onSelectedGenChange,
      } = this.props
    return (
    );
  }
}

export default SearchBar;
