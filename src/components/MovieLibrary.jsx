// implement MovieLibrary component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    // const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies, // a lista de filmes passadas pela props `movies`.
    };
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />

        <h1>Espaço da lista de Movie</h1>
        {/* <button onClick={ () => console.log({ movies }) }>aquii</button> */}
        <h2>{bookmarkedOnly}</h2>
        <h3>{searchText}</h3>
        <h4>{selectedGenre}</h4>

        {/* <MovieList /> */}
        {/* <MovieList movies={ movies } /> */}
        {/* movies.map((movie) => <MovieList key={ movie.title } movie={ movie }/>) */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

// MovieLibrary.propTypes = {
//   movies: arrayOf(objectoOf),
// };
// MovieLibrary.defaultProps = {
//   movies: ['object'],
// };
