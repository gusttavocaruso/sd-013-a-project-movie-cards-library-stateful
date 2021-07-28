import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilter = (movie) => {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    if (searchText) {
      return movie.title.includes(searchText)
       || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText);
    }
    if (bookmarkedOnly) {
      return movie.bookmarked && movie.title.toLowerCase().includes(searchText);
    }
    if (selectedGenre) {
      return movie.genre === selectedGenre;
    }

    return movie;
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ movies.filter(this.handleFilter) } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
