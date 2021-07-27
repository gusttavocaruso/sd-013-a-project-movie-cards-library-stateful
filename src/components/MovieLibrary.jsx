// implement MovieLibrary component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      onSearchTextChange: () => null,
      bookmarkedOnly: false,
      onBookmarkedChange: () => null,
      selectedGenre: '',
      onSelectedGenreChange: () => null,
    };
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.state;

    return (
      <>
        <SearchBar
          data={ {
            searchText,
            onSearchTextChange,
            bookmarkedOnly,
            onBookmarkedChange,
            selectedGenre,
            onSelectedGenreChange,
          } }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

// MovieLibrary.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieLibrary;
