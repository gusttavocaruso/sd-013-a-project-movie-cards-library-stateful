import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props; // Recebido do Componente App.js

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies, // É PRECISO COLOCAR ESSA PROPRIEDADE OU NÃO?
    };
  }

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }
  // Por se tratar de um botão de seleção a verificação dele é diferente, passando pelo checked.

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

// REQ 19
  addMovie = (newMovie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie], // Movies recebe o estado Anterior do array Filmes + o novoFilme = Aula Unindo componentes com estados e eventos dia 12.1
    }));
  }

  filterFavorite(searchText, bookmarkedOnly, selectedGenre, movies) {
    let filterList;
    if (bookmarkedOnly) {
      filterList = movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre !== '') {
      filterList = movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filterList = movies.filter((movie) => {
        const req2 = movie.subtitle.toLowerCase().includes(searchText.toLowerCase());

        const req3 = movie.storyline.toLowerCase().includes(searchText.toLowerCase());

        const req1 = movie.title.toLowerCase().includes(searchText.toLowerCase());
        if (req1 || req2 || req3) return true;
        return false;
      });
    }
    return filterList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let listMovies;
    if (bookmarkedOnly || selectedGenre || searchText) {
      listMovies = this.filterFavorite(searchText, bookmarkedOnly, selectedGenre, movies);
    } else {
      listMovies = movies;
    }
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange } // PRECISEI CRIAR ESSA CALLBACK
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange } // PRECISEI CRIAR ESSA CALLBACK
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange } // PRECISEI CRIAR ESSA CALLBACK
        />
        <AddMovie onClick={ this.addMovie } />
        <MovieList
          movies={ listMovies }
        />
      </>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
