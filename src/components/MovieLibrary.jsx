import React, { Component } from 'react';

import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //     onSearchTextChange: '',
  //   };
  // }

  callSubmit = () => {
    console.log('ola');
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.callSubmit } />
      </div>
    );
  }
}

export default MovieLibrary;
