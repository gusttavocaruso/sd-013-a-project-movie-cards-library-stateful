import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.props;
    let arrayMovies;
    arrayMovies = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    if (bookmarkedOnly) {
      arrayMovies = movies
        .filter((movie) => movie.bookmarked)
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }

    if (selectedGenre !== '') {
      arrayMovies = movies
        .filter((movie) => movie.genre === selectedGenre)
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }

    if (searchText !== '') {
      arrayMovies = movies
        .filter((movie) => {
          const exp1 = movie.subtitle.toLowerCase().includes(searchText.toLowerCase());
          const exp2 = movie.storyline.toLowerCase().includes(searchText.toLowerCase());
          const exp3 = movie.title.toLowerCase().includes(searchText.toLowerCase());
          if (!exp1 && !exp2 && !exp3) return null;
          return movie;
        })
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        { arrayMovies }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default MovieList;
