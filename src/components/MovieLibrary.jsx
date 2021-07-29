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
      // bookmarked: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange() {}

  onSearchTextChange = (event) => {
    const { movies, searchText, selectedGenre } = this.state;
    const { value } = event.target;

    this.setState({ searchText: value });
    const moviesTextFilter = this.movies
      .filter(
        (movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText),
      )
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.bookmarked === true);

    if (!value) return this.setState({ movies });
    this.setState({ movies: moviesTextFilter });
  };

  render() {
    const { movies, searchText, selectedGenre } = this.state;

    return (
      <div>
        <h2>Biblioteca de Filmes</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ this.bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleChange } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
