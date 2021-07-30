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
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar movies={ movies } />
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
