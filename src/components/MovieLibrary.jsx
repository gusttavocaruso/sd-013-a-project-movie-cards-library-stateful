import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
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

  search = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  bookmarker = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  genre = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  handleClick = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  };

  // feito com a ajuda do Gabriel Gaspar
  filter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const includeText = movies.filter((movie) => (
      movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
    ));

    const bookmarked = bookmarkedOnly
      ? includeText.filter((movie) => movie.bookmarked) : includeText;

    const filteredMovies = selectedGenre !== ''
      ? bookmarked.filter((movie) => movie.genre === selectedGenre) : bookmarked;

    return filteredMovies;
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { search, bookmarker, genre, handleClick, filter } = this;
    const filteredMovies = filter();

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ search }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ bookmarker }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ genre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
