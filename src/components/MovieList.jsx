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
          || e.subtitle.includes(searchText)
          || e.storyline.includes(searchText))
          .filter((e) => {
            const book = (!bookmarkedOnly) ? e : e.bookmarked === true;
            return book;
          })
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })),
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;

export default MovieList;
