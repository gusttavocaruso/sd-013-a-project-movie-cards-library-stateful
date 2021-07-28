// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText
          onSearchTextChange
          bookmarkedOnly
          onBookmarkedChange
          selectedGenre
          onSelectedGenreChange
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
