/* eslint-disable react/prop-types */
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

// faltando escrever as funções que irão modificar os states.
// não se preocupe com os erros bobos do npm :)

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      /* movies: props.movies, */
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) { // te amo course <3
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ movies }
        />
      </>
    );
  }
}

export default MovieLibrary;
