import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  filterBookMarkedOnly = () => {
    let { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    return movies;
  };

  filterSearchTextOnly = () => {
    const { searchText } = this.state;
    const { movies } = this.props;
    const retorno = movies.filter((movie) => movie
      .title.includes(searchText) || movie
      .subtitle.includes(searchText) || movie
      .storyline.includes(searchText));
    return retorno;
  };

  filterSelectedGenreOnly = () => {
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    const retorno = movies.filter((movie) => movie.genre.includes(selectedGenre));
    return retorno;
  };

  selectedGenreChange = (e) => {
    this.setState({ selectedGenre: e.target.value }, () => {
      const filtradosPeloGenre = this.filterSelectedGenreOnly();
      this.setState({ movies: filtradosPeloGenre });
    });
  }

  bookmarkedChange = () => {
    this.setState((stateAnterior) => ({ bookmarkedOnly: !stateAnterior.bookmarkedOnly }),
      () => {
        const filtradosPeloBookMarked = this.filterBookMarkedOnly();
        this.setState({ movies: filtradosPeloBookMarked });
      });
  }

  SearchTextChange = (e) => {
    this.setState({ searchText: e.target.value }, () => {
      const filtradosPeloText = this.filterSearchTextOnly();
      this.setState({ movies: filtradosPeloText });
    });
  }

  // -------------------

  addMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] }, async () => {
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.SearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
