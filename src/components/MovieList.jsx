// implement MovieList component here
import React from 'react';

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import '../MovieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list-container">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieList;
