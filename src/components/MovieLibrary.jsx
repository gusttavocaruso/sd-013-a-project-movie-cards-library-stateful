import React from 'react';
import PropTypes from 'prop-types';
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

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  onAddMovie = (movie) => {
    this.setState((currState) => ({
      movies: [...currState.movies, movie],
    }));
  }

  render() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = movies.filter((movie) => (bookmarkedOnly === false
      ? true
      : movie.bookmarked === true))
      .filter((movie) => (selectedGenre === '' ? true : movie.genre === selectedGenre))
      .filter((movie) => {
        if (searchText === '') {
          return true;
        }
        const loweredCaseSearchText = searchText.toLowerCase();
        const includesTitle = movie.title.toLowerCase().includes(loweredCaseSearchText);
        const includesSubtitle = movie.subtitle.toLowerCase()
          .includes(loweredCaseSearchText);
        const includesStoryline = movie.storyline.toLowerCase()
          .includes(loweredCaseSearchText);
        return includesTitle || includesSubtitle || includesStoryline;
      });

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.onAddMovie } />
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
