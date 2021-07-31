// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleSeachTextChange = this.handleSeachTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
  }

  handleSeachTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleBookmarkedChange(event) {
    console.log(event);
    this.setState({
      // bookmark
    });
  }

  handleSelectedGenreChange() {
    this.setState({
      // vai mudar o estado do genero
    });
  }

  filtrarFilme() {
    const { searchText, movies } = this.state;
    const filmesFiltrados = movies
      .filter((movie) => movie.title.includes(searchText));
    return filmesFiltrados;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSeachTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ this.filtrarFilme() } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
