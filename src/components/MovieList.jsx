import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies.movies);
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MovieList;
