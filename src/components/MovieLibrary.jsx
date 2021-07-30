import React from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: (e) => { this.setState({ searchText: e.target.value }); },
      bookmarkedOnly: false,
      onBookmarkedChange: () => {},
      selectedGenre: '',
      onSelectedGenreChange: () => {},
      movies: props.movies,
    };
    this.setState = this.setState.bind(this);
  }

  render() {
    const { movies } = this.state;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </section>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//     bookmarked: PropTypes.bool,
//     genre: PropTypes.string,
//   })),
// };

// MovieLibrary.defaultProps = { movies: [] };

export default MovieLibrary;
