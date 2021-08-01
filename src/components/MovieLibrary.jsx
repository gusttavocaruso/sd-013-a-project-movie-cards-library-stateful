import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange({ target: { checked, name, type, value } }) {
    if (type === 'checkbox') return this.setState({ [name]: checked });
    this.setState({ [name]: value });
  }

  handleClick(getState) {
    this.setState((prevState) => ({ movies: [...prevState.movies, getState] }));
  }

  handleSearch() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (searchText) {
      return movies
        .filter((movie) => JSON.stringify(movie).toLowerCase()
          .includes(searchText.toLowerCase()));
    }
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre) {
      return movies.filter((movie) => movie.genre.toLowerCase().includes(selectedGenre));
    }

    return movies;
  }

  render() {
    const { handleChange, handleClick, handleSearch, state } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <AddMovie onClick={ handleClick } />
        <MovieList movies={ handleSearch() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
