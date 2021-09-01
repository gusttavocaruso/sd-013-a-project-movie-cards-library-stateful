import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
  }

  handleChange = (e) => {
    const { name, type, checked } = e.target;
    let { value } = e.target;
    if (type === 'checkbox') {
      value = checked;
    }
    this.setState({
      [name]: value,
    });
  }

    addMovie = (newMovie) => {
      const { movies } = this.state;
      this.setState({
        movies: [...movies, newMovie],
      });
    }

    moviesFiltered() {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
      const movieArr = movies.filter((movie) => {
        if (bookmarkedOnly) {
          return movie.bookmarked === true;
        } return movie;
      }).filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
     || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
     || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
        .filter((movie) => movie.genre.includes(selectedGenre.toLowerCase()));
      return movieArr;
    }

    render() {
      const { searchText, bookmarkedOnly, selectedGenre } = this.state;
      return (
        <div>
          <h2> My awesome movie library </h2>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChange }
          />
          <MovieList movies={ this.moviesFiltered() } />
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
