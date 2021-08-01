import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  movieFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filterSearch = movies
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    const genre = movies.filter((movie) => movie.genre === selectedGenre);
    const bookMarked = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);

    if (bookmarkedOnly) return bookMarked;
    if (selectedGenre !== '') return genre;

    return filterSearch;
  }

  resetButton = (newMovie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const { state: { searchText, selectedGenre, bookmarkedOnly } } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ this.movieFilter() } />
        <AddMovie onClick={ this.resetButton } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
