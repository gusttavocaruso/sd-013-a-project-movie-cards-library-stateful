import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.inputMovie = this.inputMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputMovie({ target }) {
    const { name, value } = target;
    console.log(value);
    this.setState = ({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">
            {' '}
            Título
            <input
              id="inputTitle"
              type="text"
              name="title"
              // value={ this.state.title }
              onChange={ this.inputMovie }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="inputSubTitle"></label>
        </form>
      </div>
    );
  }
}
