import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

// pega a lista de filmes no data, através da props movies, e renderiza ela, com a ajuda do filho MovieCard
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
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
