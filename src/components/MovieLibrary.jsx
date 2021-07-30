import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange = () => {
    const { bookmarkedOnly } = this.state;
    const value = Object.values(bookmarkedOnly)[0];
    this.setState({
      bookmarkedOnly: !value,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  /* filterMovie = () => {

  } */

  render() {
    const { selectedGenre, bookmarkedOnly, movies, searchText } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
