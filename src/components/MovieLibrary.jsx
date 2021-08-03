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
    this.getState = this.getState.bind(this);
    this.getBookMarked = this.getBookMarked.bind(this);
    this.getSelectedGenre = this.getSelectedGenre.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value, type, checked } }) {
    const valueType = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valueType });
  }

  handleClick(movieObject) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieObject],
    });
  }

  getState() {
    const { searchText, movies } = this.state;
    const searchLower = searchText.toLowerCase();
    const newList = movies.filter((movie) => (
      searchText ? movie.title.toLowerCase().includes(searchLower)
        || movie.subtitle.toLowerCase().includes(searchLower)
        || movie.storyline.toLowerCase().includes(searchLower)
        : movies
    ));
    return newList;
  }

  getBookMarked() {
    const { bookmarkedOnly } = this.state;
    const filtered = this.getState();
    return filtered.filter((movie) => (
      bookmarkedOnly ? movie.bookmarked === true
        : filtered
    ));
  }

  getSelectedGenre() {
    const { selectedGenre } = this.state;
    const filtered = this.getBookMarked();
    return filtered.filter((movie) => (
      selectedGenre ? movie.genre === selectedGenre
        : filtered
    ));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.getSelectedGenre() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
