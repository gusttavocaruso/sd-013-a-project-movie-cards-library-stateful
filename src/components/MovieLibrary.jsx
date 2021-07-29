import React from 'react';
import Proptypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Data from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: Data.movies,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state, handleChange } = this;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          bookmarkedOnly={ state.bookmarkedOnly }
          selectedGenre={ state.selectedGenre }
          movies={ state.movies }
          onSearchTextChange={ handleChange }
          /* onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange } */
        />
        <MovieList
          movies={ Data }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.string,
}.isrequired;

export default MovieLibrary;
