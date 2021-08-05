import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filterText = this.filterText.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // atualiza o stato do bookmarked, através do filho searchBar
  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
    console.log(target.checked);
    console.log(this.state);
  }

  // atualiza o stato do selectedGenre, através do filho searchBar
  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    console.log(this.state);
    console.log(target.value);
  }

  // atualiza o stato do searchText, através do filho searchBar
  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
    console.log(this.state);
  }

  // pega o stato atual do filho addMovie, e usa pra adicionar um novo filme na lista, a lista estava guardada no estado movie, que vem através de uma props { movies }
  onClick(newState) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, newState],
    }));
  }

  // usa as informações do estado para filtrar e achar os filmes correspondente
  filterText() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const listaFilmeFiltrados = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      return listaFilmeFiltrados.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre) {
      return listaFilmeFiltrados.filter((movie) => movie.genre === selectedGenre);
    }
    return listaFilmeFiltrados;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList movies={ this.filterText() } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
// obtive ajuda e dicas do Rogerio P.
