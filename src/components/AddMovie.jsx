// implement AddMovie component
import React, { Component } from 'react';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        AddMovie
      </form>
    );
  }
}

AddMovie.propTypes = {

};

export default AddMovie;
