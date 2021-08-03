import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((e) => e.title.includes(searchText)
          || e.storyline.includes(searchText)
          || e.subtitle.includes(searchText))
          .filter((book) => {
            const bookMarked = (!bookmarkedOnly) ? book : book.bookmarked === true;
            return bookMarked;
          })
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;

export default MovieList;
