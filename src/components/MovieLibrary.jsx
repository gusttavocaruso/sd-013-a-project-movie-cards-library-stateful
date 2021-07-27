// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    const movies = this.props.movies;
    return(
      <div>
        Movie Library Component
        <SearchBar />
        <MovieList movies={movies}/>
      </div>
    )
  }
}

export default MovieLibrary;
