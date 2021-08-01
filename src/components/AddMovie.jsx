import React, { Component } from 'react';

class AddMovie extends React.Component {
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

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="input-text" data-testid="title-input-label">
            Titulo
            <input type="text" name="" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
