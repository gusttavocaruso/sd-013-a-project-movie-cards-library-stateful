import React, { Component } from 'react';

import Header from './Header';
import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
