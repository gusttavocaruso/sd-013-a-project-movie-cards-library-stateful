import React, { Component } from 'react';
import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: '',
      onBookmarkedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  }

  handleSet = (event) => {
    alert('Botão');
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar params={ this.state } />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleSet } />
      </div>
    );
  }
}

export default MovieLibrary;
