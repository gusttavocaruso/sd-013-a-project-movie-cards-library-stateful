import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onChangeFunc = this.onChangeFunc.bind(this);
    this.state = {
      searchInput: '',
      favoriteMovie: false,
      genre: '',
    };
  }

  onChangeFunc({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchInput, favoriteMovie, genre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchInput }
          onSearchTextChange={ this.onChangeFunc }
          bookmarkedOnly={ favoriteMovie }
          onBookmarkedChange={ this.onChangeFunc }
          selectedGenre={ genre }
          onSelectedGenreChange={ this.onChangeFunc }
        />
        <h2> My awesome movie library </h2>
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
