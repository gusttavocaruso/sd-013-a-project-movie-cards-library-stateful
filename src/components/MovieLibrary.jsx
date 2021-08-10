import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
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
    this.addMovie = this.addMovie.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  handleChange({ target }) {
    const { name, type, checked, value } = target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: result,
    });
  }

  addMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  // Função sugerida pelo Matheus Duarte para colocar os valores dos inputs em lower case, evitando que os filmes não sejam encontrados por diferenças na digitação.
  movieFilter() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    const moviesArray = movies
      .filter((movie) => {
        if (bookmarkedOnly) {
          return movie.bookmarked === true;
        } return movie;
      }).filter((movie) => (movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      || movie.subtitle
        .toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.storyline
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      .filter((movie) => movie.genre.includes(selectedGenre));
    return moviesArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.movieFilter() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

const { arrayOf, object } = PropTypes;

MovieLibrary.propTypes = {
  movies: arrayOf(object),
}.isRequired;

export default MovieLibrary;
