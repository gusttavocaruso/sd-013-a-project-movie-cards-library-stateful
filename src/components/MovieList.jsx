import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // searchText, bookmarkedOnly, selectedGenre
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  // searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
};

export default MovieList;
