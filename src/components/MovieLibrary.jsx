import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filterMovies = this.filterMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const { movies } = this.props;

    this.state = {
      movies,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies = () => {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;

    const filteredMovies = movies
      .filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));

    if (bookmarkedOnly) {
      return filteredMovies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre) {
      return filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredMovies;
  }

  handleAddMovie = (newMovie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
