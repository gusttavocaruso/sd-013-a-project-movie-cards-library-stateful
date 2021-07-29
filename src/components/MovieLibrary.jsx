// implement MovieLibrary component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  // Lógica do onClick feito com a ajuda do Pull Request abaixo:
  // https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/28/files

  // Explicação na aula do Bloco 13 - Dia 1:
  // "Renderização condicional e atualização de arrays no estado"

  // Etapa 1:

  // onClick(object) {
  //   this.setState((previousState) => ({
  //     movies: [...previousState.movies, object],
  //   }));
  // }

  // Etapa 2 (com desestruturação):

  onClick(object) {
    this.setState(({ movies }) => ({
      movies: [...movies, object],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList
          movies={ Object.values(movies)
            .filter((movie) => (bookmarkedOnly === false
              ? movie : movie.bookmarked === bookmarkedOnly))
            .filter((movie) => (selectedGenre === ''
              ? movie : movie.genre === selectedGenre))
            .filter((movie) => movie.title.includes(searchText)
              || movie.subtitle.includes(searchText)
              || movie.storyline.includes(searchText)) }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

// Lógica do prop "movies" feito com a ajuda do Pull Request abaixo:
// https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/28/files

MovieLibrary.propTypes = {
  onClick: PropTypes.array,
}.isRequired;

export default MovieLibrary;
