import React from 'react';
import Proptypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  }

  filter = () => {
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
    return allMovies;
  }

  onClick = (state) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, state],
    }));
  }

  render() {
    const { state, handleChange, filter, onClick } = this;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          bookmarkedOnly={ state.bookmarkedOnly }
          selectedGenre={ state.selectedGenre }
          movies={ state.movies }
          onSearchTextChange={ handleChange }
          onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ filter() } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieLibrary;
