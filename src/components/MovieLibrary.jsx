// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <main>
        <SearchBar />
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
