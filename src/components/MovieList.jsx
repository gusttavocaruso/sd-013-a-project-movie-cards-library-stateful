import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.props;
    let filteredList;

    const filterMovie = () => {
      if (bookmarkedOnly) {
        filteredList = movies
          .filter((movie) => movie.bookmarked);
      }
      if (selectedGenre !== '') {
        filteredList = movies
          .filter((movie) => movie.genre === selectedGenre);
      }
      if (searchText !== '') {
        filteredList = movies
          .filter((movie) => {
            const exp1 = movie.subtitle.includes(searchText);
            const exp2 = movie.storyline.includes(searchText);
            const exp3 = movie.title.includes(searchText);
            if (exp1 || exp2 || exp3) return movie;
            return false;
          });
      }
    };

    if (bookmarkedOnly || selectedGenre || searchText) filterMovie();

    let arrayMovies;
    if (filteredList) {
      arrayMovies = filteredList
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    } else {
      arrayMovies = movies
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
