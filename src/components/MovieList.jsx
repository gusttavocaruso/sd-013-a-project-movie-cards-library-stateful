import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, title } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.filter((movie) => movie.title.includes(title))
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieList;
