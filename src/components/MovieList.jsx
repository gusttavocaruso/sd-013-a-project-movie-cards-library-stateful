import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((movie) => movie.genre.includes(selectedGenre))
          .filter((movie) => {
            if (movie.title.includes(searchText)
              || movie.subtitle.includes(searchText)
              || movie.storyline.includes(searchText)) {
              return <MovieCard key={ movie.title } movie={ movie } />;
            }
            return '';
          })
          .filter((movie) => {
            if (movie.bookmarked === bookmarkedOnly || !bookmarkedOnly) {
              return <MovieCard key={ movie.title } movie={ movie } />;
            }
            return '';
          })
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
