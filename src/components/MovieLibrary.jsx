import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import movies from '../data';

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

  onChange = ({ target }) => {
    const { id, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [id]: value,
    });
    this.refreshMovies();
  }

  replaceFilteredMovies = (arrayMovies) => this.setState({ movies: arrayMovies })

  moviesByFavorite = () => {
    const { movies, bookmarkedOnly } = this.state;
    const newMovies = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarkedOnly : movie));
    this.replaceFilteredMovies(newMovies);
  }

  moviesByGenre = () => {
    const { movies, selectedGenre } = this.state;
    // if(selectedGenre)
    const moviesFiltered = movies.filter(({ genre }) => selectedGenre === genre);
    this.replaceFilteredMovies(moviesFiltered);
    console.log(selectedGenre, moviesFiltered);
  }

  refreshMovies = async () => {
    const { bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly) await this.moviesByFavorite();
    if (selectedGenre) this.moviesByGenre();
    // .filter((movie) => movie.genre === selectedGenre);
    // .filter(({ title, subtitle, storyline }) => title.includes(searchText) || subtitle.includes(searchText) || storyline.includes(searchText));
  }

  render() {
    const { onChange } = this;
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
