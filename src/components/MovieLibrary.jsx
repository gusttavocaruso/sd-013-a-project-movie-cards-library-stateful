// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const { movies } = this.props;

    // https://stackoverflow.com/questions/47635509/eslint-object-shorthand-error-with-variable-passed-in

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    // const filteredMovies = movies;
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
        <MovieList movies={ filteredMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  // movies: PropTypes.array.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
