import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    // this.handleBookmarkChange = this.handleBookmarkChange.bind(this);
    // this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*   handleSearchTextChange(e) {
    console.log('searchText', e);
    this.setState({ searchText: e.target.value });
  }

  handleBookmarkChange(e) {
    console.log('handleBookmarkChange', e);
    this.setState({ bookmarkedOnly: e.target.value });
  }

  handleGenreChange(e) {
    console.log('handleGenreChange', e);
    this.setState({ selectedGenre: e.target.value });
  } */

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange, state } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <AddMovie />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
