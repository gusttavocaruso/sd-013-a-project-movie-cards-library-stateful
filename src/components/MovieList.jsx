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
          .filter((e) => {
            const bookMarked = (!bookmarkedOnly) ? e : e.bookMarked = true;
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
}.isRequired;

export default MovieList;
