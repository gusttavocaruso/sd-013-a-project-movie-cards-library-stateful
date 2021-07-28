import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleOnSearchTextChange = this.handleOnSearchTextChange.bind(this);
    this.handleOnBookmarkedChange = this.handleOnBookmarkedChange.bind(this);
    this.handleOnSelectedGenreChange = this.handleOnSelectedGenreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies,
      moviesCopy: movies,
    };
  }

  handleOnSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  handleOnBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  handleOnSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  handleBtnClick(state) {
    const { moviesCopy } = this.state;
    this.setState({ moviesCopy: [...moviesCopy, state] });
  }

  filteredMovies() {
    const { bookmarkedOnly, moviesCopy, selectedGenre, searchText } = this.state;
    const bookmarked = bookmarkedOnly ? moviesCopy
      .filter((movie) => movie.bookmarked) : moviesCopy;
    const genre = selectedGenre !== '' ? bookmarked
      .filter((movie) => movie.genre === selectedGenre) : bookmarked;
    const filtered = genre.filter((movie) => movie
      .title.toLowerCase().includes(searchText.toLowerCase())
    || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
    || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));

    return filtered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleOnSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleOnBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleOnSelectedGenreChange }
        />
        <MovieList
          movies={ this.filteredMovies() }
        />
        <AddMovie onClick={ this.handleBtnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

export default MovieLibrary;
