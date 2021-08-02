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

  // filter = () => {
  // };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { search, bookmarker, genre, handleClick } = this;

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
        <MovieList movies={ movies } />
        <AddMovie onClick={ handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
