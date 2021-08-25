import PropTypes from 'prop-types';
import React from 'react';
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

  handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: result,
    });
  }

  movieFilter() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    const moviesArray = movies
      .filter((movie) => {
        if (bookmarkedOnly) {
          return movie.bookmarked === true;
        } return movie;
      }).filter((movie) => (movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      || movie.subtitle
        .toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.storyline
        .toLowerCase()
        .includes(searchText.toLowerCase()))
      .filter((movie) => movie.genre.includes(selectedGenre));
    return moviesArray;
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
    console.log(movies);
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
        <MovieList
          movies={ this.movieFilter() }
        />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
};

export default MovieLibrary;
