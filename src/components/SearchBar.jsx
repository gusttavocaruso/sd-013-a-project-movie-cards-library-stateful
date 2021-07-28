import React from 'react';
import MovieList from './MovieList';

class SearchBar extends React.Component {
  render() {
    return (
      <MovieList />
    );
  }
}

SearchBar.propTypes = {
  movie: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.callback,
    bookmarkedOnly: PropTypes.boolean,
    onBookmarkedChange: PropTypes.callback,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.callback,
  }).isRequired,
};

export default SearchBar;
