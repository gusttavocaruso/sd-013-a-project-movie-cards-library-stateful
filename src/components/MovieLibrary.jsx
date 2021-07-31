import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <SearchBar />
        {/* <MovieList /> */}
        {/* <AddMovie /> */}
      </main>
    );
  }
}

export default MovieLibrary;
