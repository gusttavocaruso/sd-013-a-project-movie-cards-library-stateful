import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onChangeFunc = this.onChangeFunc.bind(this);
    this.addMovieFunc = this.addMovieFunc.bind(this);
    this.state = {
      searchInput: '',
      searchFavoriteMovie: false,
      searchGenre: '',
      movies: props.movies,
    };
  }

  onChangeFunc({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieFunc(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
  }

  render() {
    const { searchInput, searchFavoriteMovie, searchGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchInput }
          onSearchTextChange={ this.onChangeFunc }
          bookmarkedOnly={ searchFavoriteMovie }
          onBookmarkedChange={ this.onChangeFunc }
          selectedGenre={ searchGenre }
          onSelectedGenreChange={ this.onChangeFunc }
        />
        <h2> My awesome movie library </h2>
        <MovieList
          movies={ movies }
          bookmarkedOnly={ searchFavoriteMovie }
          selectedGenre={ searchGenre }
          searchText={ searchInput }
        />
        <AddMovie onClick={ this.addMovieFunc } />
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
