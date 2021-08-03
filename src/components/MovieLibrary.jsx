import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import Movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
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
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.callback1 }
          onSelectedGenreChange={ this.callback2 }
          onBookMarkedChange={ this.callback3 }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
};

export default MovieLibrary;
