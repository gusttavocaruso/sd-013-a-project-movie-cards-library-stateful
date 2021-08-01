import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      onSearchTextChange: () => {},
      bookmarkedOnly: false,
      onBookmarkedChange: () => {},
      selectedGenre: '',
      onSelectedGenreChange: () => {},
      movies: props.movies,
    };
  }

  render() {
    const {
      searchText,
      onSelectedGenreChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSearchTextChange,
      movies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
          movies={ movies }
        />
        <MovieList movies={ movies } searchText={ searchText } />
        <AddMovie onSearchTextChange={ onSearchTextChange } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
