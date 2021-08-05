import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
    this.add = this.add.bind(this);
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const text = movies.filter((movie) => (searchText ? movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)
      : movies));
    const marked = text.filter((markItem) => (bookmarkedOnly
      ? markItem.bookmarked === true : text));
    const genre = marked.filter((genItem) => (selectedGenre
      ? genItem.genre === selectedGenre : marked));
    return genre;
  }

  add(state) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, state] });
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
        <AddMovie onClick={ this.add } />
        <MovieList movies={ this.filter() } />
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

/* Referências: Componente criado com a ajuda da pessoa estudante Caroline Boaventura
Turma 13 - Tribo A */
