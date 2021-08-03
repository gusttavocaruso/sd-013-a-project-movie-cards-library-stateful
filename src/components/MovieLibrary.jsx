import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filterMoviesByTitle = this.filterMoviesByTitle.bind(this);

    const { movies } = this.props;

    this.state = {
      movies,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
  }

  handleCheckboxChange({ target }) {
    const { movies, bookmarkedOnly } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (bookmarkedOnly) {
      return value;
    }

    this.setState({
      movies: value ? movies.filter((m) => m.bookmarked === value) : movies,
    });
  }

  filterMoviesByTitle(e) {
    const { value } = e.target;
    const { movies, searchText } = this.state;
    this.setState({ searchText: value });

    const filteredMovies = movies
      .filter((m) => m.title.toLowerCase().includes(value.toLowerCase())
        || m.subtitle.toLowerCase().includes(value.toLowerCase)
        || m.storyline.toLowerCase().includes(value.toLowerCase));

    if (!searchText) {
      return movies;
    }

    this.setState({
      movies: filteredMovies,
    });
  }

  render() {
    const { movies, searchText, selectedGenre } = this.state;
    const { bookmarkedOnly } = this.props;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ filterMoviesByTitle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleCheckboxChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieLibrary;
