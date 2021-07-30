import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      ...this.props,
    };
    // console.log('linha 17 >>>>', this.state);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <MovieList movies={ movies } />
        <SearchBar search={ { searchText, bookmarkedOnly, selectedGenre, movies } } />

        <AddMovie onClick={ movies[movies.length - 1] } />
      </div>
    );
  }
}

export default MovieLibrary;
