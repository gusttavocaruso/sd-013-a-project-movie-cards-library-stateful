import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: movies.this.props,
  //   };
  // }

  change = (param) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, param] });
  }

  render() {
    console.log();
    // const { title, subtitle, storyline, rating,
    // imagePath, genre, bookmarked } = movies
    // const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie change={ this.change } />
      </div>
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
//     bookmarked: true,
//     genre: PropTypes.string,
//   })).isRequired,
// };
MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
