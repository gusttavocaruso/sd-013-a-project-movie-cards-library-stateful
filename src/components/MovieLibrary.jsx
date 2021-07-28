import React, { Component } from 'react';
import filme from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ filme } />
        {/* <AddMovie />  */}
      </div>
    );
  }
}

export default MovieLibrary;
