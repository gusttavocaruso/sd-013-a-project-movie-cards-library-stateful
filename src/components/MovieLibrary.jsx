import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick = (state) => {
    // const { movies: allMovies } = this.props;
    // allMovies.push(state);
    this.setState((prevState) => ({
      movies: [...prevState.movies, state],
    }));
  }

  filterChange = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let allMovies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      allMovies = allMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      allMovies = allMovies.filter((movie) => movie.genre === selectedGenre);
    }
    // Dica de Fernando Costa Turma 13 a:
    // Utilizar um filter em cima do outro para juntar os filtros
    return allMovies;
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
        <MovieList movies={ this.filterChange() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
