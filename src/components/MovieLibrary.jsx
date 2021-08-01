// implement MovieLibrary component here
import React, { Component } from 'react';
import MoveList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <MoveList />
        <SearchBar />
      </div>
    );
  }
}
export default MovieLibrary;
