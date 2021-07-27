import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// 15 - Crie um componente chamado <MovieLibrary />
class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies, // guarda a lista de filmes.
      searchText: '', // guarda o texto de busca por filmes;
      bookmarkedOnly: false, // um boolean que guarda se é para filtrar por filmes favoritados ou não;
      selectedGenre: '', // guarda o gênero do filme selecionado para poder fazer a filtragem;
    };

    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.estruturaMovies = this.estruturaMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name, type, value, checked } = event.target;
    const novoValor = (type === 'checkbox') ? checked : value;
    this.setState({ [name]: novoValor });
  }

  onClick(movie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, movie], // Eu adiciono o array com todos filmes e o novo filme pelo spread
    });
  }

  // 18 - Renderize <MovieList /> dentro de <MovieLibrary />
  estruturaMovies() {
    const { movies } = this.state; // Desestrutura o this.state
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state; // Desestrutura o this.state
    let filmes = [...movies]; // Guarda no filmes o array de todos filmes
    if (searchText) {
      filmes = filmes.filter((filme) => (
        filme.title.includes(searchText) // Filmes cujo título contém o que está presente em searchText, ou;
        || filme.subtitle.includes(searchText) // Filmes cujo subtítulo contém o que está presente em searchText, ou;
        || filme.storyline.includes(searchText) // Filmes cuja sinopse contém o que está presente em searchText.
      ));
    }
    if (selectedGenre) { // Será validado que é possivel filtrar por categoria
      filmes = filmes.filter((filme) => filme.genre.includes(selectedGenre));
    }
    if (bookmarkedOnly) { // Será validado que é possivel filtrar por favoritos
      filmes = filmes.filter((filme) => filme.bookmarked);
    }
    return filmes;
  }

  renderSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  render() {
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        {/* 17 - Renderize <SearchBar /> dentro de <MovieLibrary /> */}
        { this.renderSearchBar() }
        <MovieList movies={ this.estruturaMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;
