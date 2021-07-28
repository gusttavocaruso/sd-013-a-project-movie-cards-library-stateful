import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  filteredMovies = () => {
    let { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    if (searchText !== '') {
      movies = movies.filter((movie) => (movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)));
    }
    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      movies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }
  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        { this.filteredMovies().map((movie) => <MovieCard key={ movie.title } movie={ movie } />)  }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
