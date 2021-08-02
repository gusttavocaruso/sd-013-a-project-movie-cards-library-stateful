import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import matchSearchedWord from '../util/matchSearchedWord';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      ...this.props,
    };
    this.changeStateProperty = this.changeStateProperty.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  changeStateProperty = (e) => {
    const property = e.target.getAttribute('property');
    this.setState({ [property]: e.target.value });
  }

  handleCheck = ({ target: { checked } }) => {
    this.setState({ bookmarkedOnly: checked });
  }

  moviesFilter = ({ searchText, bookmarkedOnly, selectedGenre, movies }) => movies
    .filter(({ title, subtitle, genre, bookmarked, storyline }) => (
      bookmarkedOnly ? bookmarked : 'Todos')
    && (genre.includes(selectedGenre))
    && (matchSearchedWord(searchText, [title, subtitle, storyline])))

  // revisão do Eduardo bloco 12
  handleAddMovie = (newMovie) => {
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovie] }));
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <MovieList movies={ this.moviesFilter(this.state) } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeStateProperty }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheck }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeStateProperty }
        />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
