import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
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

  handleChange = ({ event }) => {
    const { type, checked, value, name } = event;

    const newChange = type === 'checkbox' ? checked : value;

    this.setState = {
      [name]: newChange,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { handleChange } = this;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
