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
  }

  addNewMovie = (movieObj) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movieObj],
    }));
  }

  filterByGenre = (movies) => {
    const { selectedGenre } = this.state;
    return movies.filter((movie) => movie.genre === selectedGenre);
  }

  filterByText = (movies) => {
    const { searchText } = this.state;
    return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText));
  }

  filterByFavorites = (movies) => movies.filter((movie) => movie.bookmarked)

  /**
 * Consultei o repositório do Olávio Timóteo e do Matheus Henrique para resolver essa parte.
 * https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/5
 * https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/20
 */

  refreshMovies = () => {
    const { movies, bookmarkedOnly, selectedGenre } = this.state;
    const { filterByText, filterByFavorites, filterByGenre } = this;
    let filteredMovies = movies;
    if (bookmarkedOnly) filteredMovies = filterByFavorites(filteredMovies);
    if (selectedGenre !== '') filteredMovies = filterByGenre(filteredMovies);
    filteredMovies = filterByText(filteredMovies);
    return filteredMovies;
  }

  render() {
    const { onChange, addNewMovie, refreshMovies } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = refreshMovies();
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
