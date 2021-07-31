import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  onChange = async ({ target }) => {
    const { id, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    await this.setState({
      [id]: value,
    });
    this.refreshMovies();
  }

  addNewMovie = (movieObj) => {
    console.log(movieObj);
    this.setState((prevState) => ({
      movies: [...prevState.movies, movieObj],
    }));
  }

  resetMovies = () => {
    const { movies } = this.props;
    return this.setState({ movies });
  }

  filterByGenre = (movies) => {
    const { selectedGenre } = this.state;
    if (selectedGenre) {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  filterByText = (movies) => {
    const { searchText } = this.state;
    if (searchText) {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText));
    }
    return movies;
  }

  filterByFavorites = (movies) => {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }
    return movies;
  }

  refreshMovies = () => {
    this.resetMovies();
    const { movies } = this.state;
    let filteredMovies = movies;
    filteredMovies = this.filterByFavorites(filteredMovies);
    filteredMovies = this.filterByGenre(filteredMovies);
    filteredMovies = this.filterByText(filteredMovies);
    this.setState({ movies: filteredMovies });
  }

  render() {
    const { onChange, addNewMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          onSearchTextChange={ onChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ addNewMovie } />
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
