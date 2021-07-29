import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar/SearchBar';
import AddMovie from './AddMovie/AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(novoFilme) {
    this.setState((estadoAtual) => ({
      movies: [...estadoAtual.movies, novoFilme],
    }));
  }

  // handleSomething({ target }) {

  // }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange=""
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange=""
          selectedGenre={ selectedGenre }
          onSelectedGenreChange=""
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
