// implement SearchBar component here

import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //   }
  // }

  render() {
    return (
      <form data-testid="search-bar-form">SearchBar</form>
    );
    // searchText={ props.searchText } -> searchText="uma string";
    // onSearchTextChange={ props.onSearchTextChange }
    // bookmarkedOnly={ props.bookmarkedOnly }
    // onBookmarkedChange={ props.onBookmarkedChange }
    // selectedGenre={ props.selectedGenre }
    // onSelectedGenreChange={ props.onSelectedGenreChange }
  }
}

export default SearchBar;
