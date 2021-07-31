// implement MovieLibrary component here
import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
// import AddMovie from './AddMovie';
// import Movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies: '',
    };
  }

  callback1() {
    return 'asd';
  }

  callback2() {
    return 'asd';
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ this.callback1 }
          bookmarkedOnly={ false }
          selectedGenre=""
          onSelectedGenreChange={ this.callback2 }
        />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  // searchText: PropTypes.string.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // movies: PropTypes.array.isRequired,
};

export default MovieLibrary;
