import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //   }
  // }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <AddMovie
        onClick="uma callback"
        />
        <SearchBar
          searchText="uma string"
          onSearchTextChange="uma callback"
          bookmarkedOnly="um boolean"
          onBookmarkedChange="uma callback"
          selectedGenre="uma string"
          onSelectedGenreChange="uma callback"
        />
        {/* <MovieList movies={ this.props.movies } /> */}
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
