/* eslint-disable react/prop-types */
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      /* movies: props.movies, */
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre} = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
      </>
    );
  }
}

export default MovieLibrary;
