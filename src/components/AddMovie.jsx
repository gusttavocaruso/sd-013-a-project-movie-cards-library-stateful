import { tsConstructorType } from '@babel/types';
import React, { Component } from 'react';

class AddMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  // function aqui

  render() {
    return (
      <form data-testid="add-movie-form">
        <p>Teste</p>
      </form>
    );
  }
}

export default AddMovie;
