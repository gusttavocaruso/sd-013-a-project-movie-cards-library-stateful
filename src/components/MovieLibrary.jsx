import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarked: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    const { movies, searchText, selectedGenre } = this.state;
    const filteredMovies = movies
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText))
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.bookmarked === true);

    return (
      <div>
        <h2>Biblioteca de Filmes</h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.filteredMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
