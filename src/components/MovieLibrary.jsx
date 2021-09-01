import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie(newMovie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  filterMovie(searchText, bookmarkedOnly, selectedGenre, movies) {
    let filteredList;
    if (bookmarkedOnly) {
      filteredList = movies
        .filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      filteredList = movies
        .filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      filteredList = movies
        .filter((movie) => {
          const movie1 = movie.subtitle.toLowerCase().includes(searchText.toLowerCase());
          const movie2 = movie.storyline.toLowerCase().includes(searchText.toLowerCase());
          const movie3 = movie.title.toLowerCase().includes(searchText.toLowerCase());
          if (movie1 || movie2 || movie3) return true;
          return false;
        });
    }
    return filteredList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let arrayMovies;
    if (bookmarkedOnly || selectedGenre || searchText) {
      arrayMovies = this.filterMovie(searchText, bookmarkedOnly, selectedGenre, movies);
    } else {
      arrayMovies = movies;
    }

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ arrayMovies }
        />
        <AddMovie
          onClick={ this.addMovie }
        />
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
