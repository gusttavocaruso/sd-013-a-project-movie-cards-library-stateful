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
    return '1';
  }

  callback2() {
    return '2';
  }

  callback3() {
    return '3';
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.callback1 }
          onSelectedGenreChange={ this.callback2 }
          onBookMArckedChange={ this.callback3 }
          searchText=""
          selectedGenre=""
          bookmarkedOnly={ false }
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
