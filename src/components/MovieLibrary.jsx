import React, { Component } from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
