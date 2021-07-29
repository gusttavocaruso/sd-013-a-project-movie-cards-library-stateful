import React from 'react';
// import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
class MovieLibrary extends React.Component {
//     constructor() {
//         super();

  //   }

  render() {
    return (
      <section>
        {/* <MovieList /> */}
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
