import React, { Component } from 'react';

import MovieList from './MovieList';
import data from '../data';
import SearchBar from './forms/SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: data,
  //   };
  // }

  callSubmit = () => {
    console.log('ola');
  }

  render() {
    // const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ data } />
        <AddMovie onClick={ this.callSubmit } />
      </div>
    );
  }
}

export default MovieLibrary;
