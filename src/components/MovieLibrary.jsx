import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   movies: { movies },
  //   // };
  // }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList data={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: { movies },
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieLibrary;
