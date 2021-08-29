import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }
onClick = (movieInfo) => {
  console.log(movieInfo);
}

render() {
  const { movies } = this.props;

  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie onClick={ this.onClick } />
    </div>
  );
}
}
MovieLibrary.propTypes = {
  movies: arrayOf(Object).isRequired,
};
export default MovieLibrary;
