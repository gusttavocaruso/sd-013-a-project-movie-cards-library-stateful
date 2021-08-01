// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    // const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies, // a lista de filmes passadas pela props `movies`.
    };
  }

  btnClick= (target) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, target] });
  }

  aChange= ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // newMovies = (newMovie) => {
  //   console.log('sou newMovies')
  //   const {movies} = this.state;
  //   this.setState({movies:[...movies, newMovie]});
  // }
  showMovies() {
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
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    // const {newMovies} = this.props
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.aChange }
          searchText={ searchText }
          onSearchTextChange={ this.aChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.aChange }
        />

        <h1>Espaço da lista de Movie</h1>

        <MovieList movies={ this.showMovies() } />

        <AddMovie onClick={ this.btnClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
