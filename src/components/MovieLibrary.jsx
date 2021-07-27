// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.changeSearchTextState = this.changeSearchTextState.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeSearchTextState(state) {
    this.setState({ searchText: state });
  }

  changeBookmarkedOnlyState(state) {
    this.setState({ bookmarkedOnly: state });
  }

  changeSelectedGenreState(state) {
    this.setState({ selectedGenre: state });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeSearchTextState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeBookmarkedOnlyState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeSelectedGenreState }
        />
        <MovieList
          movies={ movies }
        />
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
