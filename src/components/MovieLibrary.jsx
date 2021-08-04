import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor() {
  //   super();
  //   const { movies } = this.props;
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: { movies },
  //   };

  // change = (param) => {
  //   const { movies } = this.state;
  //   this.setState({ movies: [...movies, param] });
  // }

  render() {
    // const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library</h2>
        {/* <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie /> */}
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

export default MovieLibrary;
