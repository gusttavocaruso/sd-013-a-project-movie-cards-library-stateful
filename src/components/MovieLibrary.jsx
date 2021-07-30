import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { value, name, checked, type } = target;
    if (type === 'checkbox') {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  filter(options) {
    const { movies } = this.state;
    if (options.bookmarked) {
      return movies.filter((movie) => movie.bookmarked === true);
    } if (options.genre) {
      return movies.filter((movie) => movie.genre === options.genre);
    }
    return movies
      .filter((movie) => {
        const str = `${movie.title}, ${movie.subtitle}, ${movie.storyline}`;
        return str.includes(options.search);
      });
  }

  newMovie(movie) {
    this.setState((state) => ({
      movies: [...state.movies, movie],
    }));
  }

  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let array = movies;
    if (bookmarkedOnly === true) {
      array = this.filter({ bookmarked: true });
    }
    if (selectedGenre !== '') {
      array = this.filter({ genre: selectedGenre });
    }
    if (searchText !== '') {
      array = this.filter({ search: searchText });
    }

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ array } />
        <AddMovie onClick={ this.newMovie } />

      </div>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
