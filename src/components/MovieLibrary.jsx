// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    const {
      searchText, //uma string
      onSearchTextChange, //uma callback
      bookmarkedOnly, //um boolean
      onBookmarkedChange, //uma callback
      selectedGenre, //uma string
      onSelectedGenreChange, //uma callback
    } = movies;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.PropTypes = {
  movies: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange:PropTypes.func,
    selectedGenre:PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default MovieLibrary;