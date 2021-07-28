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
    };
  }

  // function aqui

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="aaa" data-testid="title-input-label" title={ title }>
          Título
          <input id="aaa" data-testid="title-input" />
        </label>
        <label htmlFor="bbb" data-testid="subtitle-input-label" subtitle={ subtitle }>
          Subtítulo
          <input id="bbb" data-testid="subtitle-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
