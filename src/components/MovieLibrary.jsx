import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ event }) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange({ event }) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  onSelectedGenreChange({ event }) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <AddMovie
          onClick={ this.handleClick }
        />
        <MovieList
          movies={ movies }
        />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default MovieLibrary;
