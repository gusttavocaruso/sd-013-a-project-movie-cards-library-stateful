import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
