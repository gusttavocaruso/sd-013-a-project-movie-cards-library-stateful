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

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
    console.log(target.checked);
    console.log(this.state);
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    console.log(this.state);
    console.log(target.value);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
    console.log(this.state);
  }

  onClick(newState) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, newState],
    }));
  }

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
        <AddMovie onClick={ this.addFilme } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
// obtive ajuda e dicas do Rogerio P.
