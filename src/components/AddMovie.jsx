// implement AddMovie component here
import React, { Component } from 'react';

const InitialState = {
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
    this.state = InitialState;
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form"> </form>
      </div>
    );
  }
}

export default AddMovie;
