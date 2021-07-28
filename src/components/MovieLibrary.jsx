import React from 'react';
import Proptypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    const { state } = this;
    return (
      <SearchBar
        searchText={ state.searchText }
        bookmarkedOnly={ state.bookmarkedOnly }
        selectedGenre={ state.selectedGenre }
        movies={ state.movies }
      />
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.string,
}.isrequired;

export default MovieLibrary;
