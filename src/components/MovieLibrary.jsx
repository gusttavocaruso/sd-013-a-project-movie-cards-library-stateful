import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.setChange = this.setChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleClick(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
  }

  setChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const arrayMovie = movies
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    const favorito = movies.filter((movieFavorito) => movieFavorito.bookmarked === true);
    const genero = movies.filter((movieGenero) => movieGenero.genre === selectedGenre);

    if (bookmarkedOnly) {
      return favorito;
    }

    if (selectedGenre !== '') {
      return genero;
    }

    return arrayMovie;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.setChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.setChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.setChange }
        />
        <MovieList movies={ this.filterMovie() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
