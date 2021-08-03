// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  handleClick(newMovie) {
    console.log(newMovie);
  }

  render() {
    return (
      <main>
        <SearchBar />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

export default MovieLibrary;
