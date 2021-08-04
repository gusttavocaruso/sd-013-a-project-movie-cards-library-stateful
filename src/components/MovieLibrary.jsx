// Pai do componente MovieList

import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import InputTitle from './InputTitle';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

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
        if (movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())) {
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
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filter } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
