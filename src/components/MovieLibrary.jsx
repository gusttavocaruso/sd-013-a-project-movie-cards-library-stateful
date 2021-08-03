// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveList from './MovieList';
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
  }

onSearchTextChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });
};

onBookmarkedChange = (event) => {
  this.setState({
    bookmarkedOnly: event.target.checked,
  });
}

onSelectedGenreChange = (event) => {
  this.setState({
    selectedGenre: event.target.value,
  });
}

filterMovies = (movies, searchText, bookmarkedOnly, selectedGenre) => {
  let arrayFilter = movies;

  if (searchText !== '') {
    arrayFilter = arrayFilter.filter((movie) => {
      if (movie.title.toLowerCase().includes(searchText.toLowerCase()
        || movie.subtilte.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtilte.toLowerCase().includes(searchText.toLowerCase()))) {
        return true;
      }
      return false;
    });
  }

  if (bookmarkedOnly !== false) {
    arrayFilter = arrayFilter.filter((movie) => movie.bookmarked);
  }
  if (selectedGenre !== '') {
    arrayFilter = arrayFilter.filter((movie) => movie.genre === selectedGenre);
  }
  return arrayFilter;
}

render() {
  const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
  const filter = this.filterMovies(movies, searchText, bookmarkedOnly, selectedGenre);

  return (
    <div>
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.onSearchTextChange }
        onBookmarkedChange={ this.onBookmarkedChange }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      />
      <MoveList movies={ filter } />
      <AddMovie />
    </div>
  );
}
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
