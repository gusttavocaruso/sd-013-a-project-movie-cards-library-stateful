import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText="uma string"
          onSearchTextChange="uma callback"
          bookmarkedOnly="um boolean"
          onBookmarkedChange="uma callback"
          selectedGenre="uma string"
          onSelectedGenreChange="uma callback"
        />
        <AddMovie
          onClick="uma callback"
        />
      </div>
    );
  }
}

export default MovieLibrary;
