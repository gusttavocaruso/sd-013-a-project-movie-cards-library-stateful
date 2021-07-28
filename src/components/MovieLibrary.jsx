import React, { Component } from 'react';

import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
