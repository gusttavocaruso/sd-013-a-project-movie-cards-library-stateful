import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';

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

  filterBookmark = (original) => {
    const { bookmarkedOnly, movies } = this.state;

    if (bookmarkedOnly) {
      this.setState({ movies: movies.filter((m) => m.bookmarked) });
    } else {
      this.setState({ movies: original });
    }
  }

  filterGenre = (original) => {
    const { selectedGenre, movies } = this.state;

    if (selectedGenre !== '') {
      this.setState({ movies: movies.filter((m) => m.genre === selectedGenre) });
    } else {
      this.setState({ movies: original });
    }
  }

  filterText = (original) => {
    const { searchText, movies } = this.state;

    if (searchText !== '') {
      this.setState({ movies: movies.filter((m) => {
        if (m.title.includes(searchText)) return true;
        if (m.subtitle.includes(searchText)) return true;
        if (m.storyline.includes(searchText)) return true;
        return false;
      }) });
    } else {
      this.setState({ movies: original });
    }
  }

  handleChange = ({ target }) => {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      if (name === 'bookmarkedOnly') this.filterBookmark(movies);
      if (name === 'selectedGenre') this.filterGenre(movies);
      if (name === 'searchText') this.filterText(movies);
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { handleChange } = this;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
