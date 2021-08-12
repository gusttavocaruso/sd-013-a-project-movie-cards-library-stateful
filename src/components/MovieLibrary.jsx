// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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
  }

  onSearchTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  onBookmarkedChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  };

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  };

  onClick = (movieToAdd) => {
    this.setState((state) => ({
      movies: [...state.movies, movieToAdd],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;

    const filterMoviesByBookmarked = movies.filter((movie) => movie.bookmarked === true);

    const filterMoviesByGenre = movies.filter((movie) => movie.genre === selectedGenre);

    const filterMoviesByText = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    if (searchText) {
      movies = filterMoviesByText;
    }
    if (bookmarkedOnly) {
      movies = filterMoviesByBookmarked;
    }
    if (selectedGenre) {
      movies = filterMoviesByGenre;
    }

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
