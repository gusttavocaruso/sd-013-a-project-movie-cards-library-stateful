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
      onSearchTextChange: ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
      },
      bookmarkedOnly: false,
      onBookmarkedChange: ({ target }) => {
        this.setState({ bookmarkedOnly: target.checked });
      },
      selectedGenre: '',
      onSelectedGenreChange: ({ target }) => {
        const { value } = target;
        this.setState({ selectedGenre: value });
      },
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
        />
        <MovieList movies={ movies } searchText={ searchText } />
        <AddMovie />
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
