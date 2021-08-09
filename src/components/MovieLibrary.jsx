import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
// import Movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  handleChager = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value, });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleChager }
          onSelectedGenreChange={ this.handleChager }
          onBookmarkedChange={ this.handleChager }
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.callbackAM } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
};

export default MovieLibrary;
