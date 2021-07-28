import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    // const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

export default MovieLibrary;
