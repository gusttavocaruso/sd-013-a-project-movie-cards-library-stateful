import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleAddMovie(movieFromAddMovie) {
    this.setState((state) => ({ movies: [...state.movies, movieFromAddMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies.filter(
      ({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
        .includes(searchText),
    );

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputChange }
          onBookmarkedChange={ this.handleInputChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleInputChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
