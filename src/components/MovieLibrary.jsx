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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // Função que vai filtrar os filmes - Requisito resolvido com ajuda das colegas da turma.
  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    // Transforma texto digitado em minuscula
    const lowercaseText = searchText.toLowerCase();

    // Filtra os filmes de acordo com o que é digitado em searchText => filtra por título, subtítulo e sinopse.
    const textFilter = movies.filter((movie) => (searchText
      ? movie.title.includes(lowercaseText)
      || movie.subtitle.includes(lowercaseText)
      || movie.storyline.includes(lowercaseText)
      : movies));

    // A partir do array do primeiro filtro, aqui filtra-se por favorito. Se tiver "true", retorna o "movie". Senão, retorna o array anterior.
    const bookmarkedFilter = textFilter.filter((movie) => (bookmarkedOnly
      ? movie.bookmarked === true : textFilter));

    // A partir do array do segundo filtro, aqui filtra-se por gênero. Se o gênero do "movie" for igual ao gênero selecionado, retorna o filme. Senão, retorna o array anterior.
    const genreFilter = bookmarkedFilter.filter((movie) => (selectedGenre
      ? movie.genre === selectedGenre : bookmarkedFilter));

    return genreFilter;
  }

  // Função que adiciona um filme no array "movies" (ao clicar no botão) - Requisito resolvido com ajuda das colegas da turma.
  addMovie(state) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addMovie } />
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
