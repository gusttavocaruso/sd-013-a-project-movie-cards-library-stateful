import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filterMoviesByTitle = this.filterMoviesByTitle.bind(this);
    this.filterMoviesBySubtitle = this.filterMoviesBySubtitle.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

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

  filterMoviesBySubtitle(e) {
    const { value } = e.target;
    const { movies } = this.state;
    this.setState({ searchText: value });
    const filteredMovies = value
      ? movies.filter((m) => m.subtitle.toLowerCase().includes(value.toLowerCase()))
      : movies;
    this.setState({
      movies: filteredMovies,
    });
  }

  filterMoviesByTitle(e) {
    const { value } = e.target;
    const { movies } = this.state;
    this.setState({ searchText: value });
    this.filterMoviesBySubtitle(e);

    const filteredMovies = movies
      .filter((m) => m.subtitle.toLowerCase().includes(value.toLowerCase())
        || m.title.toLowerCase().includes(value.toLowerCase)
        || m.storyline.toLowerCase().includes(value.toLowerCase));

    if (!value) {
      return movies;
    }

    this.setState({
      movies: filteredMovies,
    });
  }

  render() {
    const { movies, searchText, searchBySub, selectedGenre } = this.state;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    const onGenreChange = (e) => {
      const { value } = e.target;
      this.setState({ selectedGenre: value });

      const filteredMovies = value
        ? movies.filter((m) => m.genre.includes(value))
        : movies;

      this.setState({
        movies: filteredMovies,
      });
    };

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterMoviesByTitle }
          searchBySub={ searchBySub }
          onSearchBySub={ this.filterMoviesBySubtitle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheckboxChange }
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
