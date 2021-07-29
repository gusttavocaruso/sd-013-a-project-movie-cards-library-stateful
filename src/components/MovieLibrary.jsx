import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      originalMovie: props.movies,
    };
  }

  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // Pega o originalMovie do state,  que nunca será modificado pois apenas recebe o valor da props
    // e depois transmite na função
    const { originalMovie } = this.state;

    if (name === 'searchText') {
      // Seta o movies para o array original antes de filtrar,
      // pois só assim é possível fazer a busca se for recomeçar o query
      this.setState({ movies: originalMovie });
      this.setState((prevState) => ({ movies: prevState.movies
        .filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase())
          || movie.subtitle.toLowerCase().includes(value.toLowerCase())
          || movie.storyline.toLowerCase().includes((value.toLowerCase()))),
      }
      ));
    }

    if (name === 'selectedGenre') {
      // Seta o movies para o array original antes de filtrar
      this.setState({ movies: originalMovie });
      // Caso o valor seja diferente de uma string vazia, ou seja, algum gênero foi selecionado,
      // só então é feito o filtro
      if (value !== '') {
        this.setState((prevState) => ({ movies: prevState.movies
          .filter((movie) => movie.genre === prevState.selectedGenre) }));
      }
    }
  }

  InsertMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // const { HandleChange, InsertMovie } = this.props;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.HandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.HandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.HandleChange }
        />
        <AddMovie onClick={ this.InsertMovie } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: undefined,
};

export default MovieLibrary;
