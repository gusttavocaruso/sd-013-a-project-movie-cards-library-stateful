import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange = ({ target }) => {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  filterMovies = () => {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const moviesTexto = movies.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)));

    const moviesFavoritos = movies.filter((movie) => movie.bookmarked === true);

    const moviesGenero = movies.filter((movie) => movie.genre === selectedGenre);

    if (searchText) return moviesTexto;

    if (bookmarkedOnly) return moviesFavoritos;

    if (selectedGenre) return moviesGenero;

    return movies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
    const { filterMovies } = this;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default MovieLibrary;
