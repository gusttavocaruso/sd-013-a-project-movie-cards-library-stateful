// implement MovieLibrary component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange() { }

  onSelectedGenreChange() { }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;

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
