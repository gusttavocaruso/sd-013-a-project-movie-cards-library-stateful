// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  recebeDoFi = (state) => {
    console.log(state);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie mandaPoPai={ this.recebeDoFi } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string,
};

MovieLibrary.defaultProps = {
  movies: {},
};
export default MovieLibrary;
