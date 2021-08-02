import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => { } }
          bookMarkedOnly
          onBookmarkedChange={ () => { } }
          selectedGenre=""
          onSelectedGenreChange={ () => { } }
        />
        <MovieList movies={ this.props.movies } />
        <AddMovie onClick={ () => { } } />
      </div>
    );
  }
}

export default MovieLibrary;
