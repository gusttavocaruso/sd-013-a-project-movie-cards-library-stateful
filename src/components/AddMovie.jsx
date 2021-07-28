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
      <div>
        <p>Teste</p>
      </div>
    );
  }
}

export default AddMovie;
