import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar'
import MovieList from './MovieList'

export default class MovieLibrary extends Component {
  constructor() {
    super();
    
    this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: movies,
    };
}

render() {
      const { movies } = this.props;
    return (
      <div>
          <MovieLibrary movies={movies} />
          <SearchBar />
          <AddMovie />
          <MovieList />      
      </div>

    );
  }
}
