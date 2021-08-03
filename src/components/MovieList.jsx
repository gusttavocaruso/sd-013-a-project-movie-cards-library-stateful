import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText))
          .filter((movie) => {
            const bookMarked = (!bookmarkedOnly) ? movie : movie.bookmarked === true;
            return bookMarked;
          })
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  searchText: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequire;

export default MovieList;
