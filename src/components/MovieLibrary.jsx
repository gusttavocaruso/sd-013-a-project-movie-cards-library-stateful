import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { movies } = this.props;
    return (
      <>.</>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
