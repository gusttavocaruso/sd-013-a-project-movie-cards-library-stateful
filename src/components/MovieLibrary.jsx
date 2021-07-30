import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';

class MovieLibrary extends Component {
  // Considerando que o dataset chega para o componente via propos e que foi necessário utilizálo como o estado inicial do componente
  // a variável "props" dentro do constructor e super deve ser mencionada
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    // movies é props do Componente MovieLibrary.
    // Esta sendo declarado no constructor para ser usado dentro do state inicial
    // Consultei o PR do Tomas Santos e gostei da solução de descontruir o movies dentro do constructor
    const { movies } = this.props;

    // Considerando que esse componente é pai da SearchBar, o Estado Inicial é declarado nele:
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // Consultei o desenvolvimento da Função "handleAddMovie" do repositório do Tomas Santos
  // https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/107/files
  // o parâmetro movie será o state atual de AddMovie disparado a cada onChange nos inputs do componente
  handleAddMovie(movie) {
    const { movies } = this.state;
    const moviesUpdated = [...movies, movie];
    this.setState({ movies: moviesUpdated });
  }

  onSelectedGenreChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ selectedGenre: value });
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  onSearchTextChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ searchText: value });
    // movies.filter((movie) => movie.title.includes(value)).map((movie) => <MovieList movies={movie} key={movie.title} />)
  }

  // Consultei essa função no PR do Tomas Santos
  filteredMovies() {
    // obtém o estado atual do componente através do destructuring do objeto state
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    // Consultei a função abaixo no PR do Tomas Santos
    // Muito boa a solução de enviar o dataset filtrado para o componente
    // Uma coisa que ficou mais esclarecido para mim nesse exercício foi a utilização do filter
    // e a intenção de captar os booleanos junto com o operador lógico "&&", ou seja,
    // só traz o array se todas as condições forem atendidas.
    // Além disso, o includes considera a string '' (vazia) dos campos como true, ou seja,
    // caso o usuário mantenha um campo vazio, o includes por padrão traz o valor true
    // para todos como resultado do teste do referido campo.

    const filterMovies = movies.filter((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;
      const hasText = searchText ? (title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))
        : true;
      const hasBookmarked = bookmarkedOnly ? bookmarked : true;
      const hasGenre = genre.includes(selectedGenre);
      return (hasText && hasBookmarked && hasGenre);
    });
    return filterMovies;
  }

  render() {
  //   const { title, subtitle, storyline, rating, imagePath, bookmarked, genre } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.handleAddMovie } />
        <MovieList movies={ this.filteredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
