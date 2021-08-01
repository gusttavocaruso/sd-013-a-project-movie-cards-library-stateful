// implement AddMovie component here
import React, { Component } from 'react';

// const InitialState = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// this.state = InitialState;
// };

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="add-movie-title" data-testid="title-input-label">
            Título
            <input
              id="add-movie-title"
              type="text"
              data-testid="title-input"
              name={ title }
              onChange={ title }
            />
          </label>
          <label htmlFor="add-movie-sub-title" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="add-movie-sub-title"
              type="text"
              data-testid="subtitle-input"
              name={ subtitle }
              onChange={ subtitle }
            />
          </label>
          <label htmlFor="image-input-label" data-testid="image-input-label">
            Imagem
            <input
              id="image-input-label"
              type="text"
              data-testid="image-input"
              name={ imagePath }
              onChange={ imagePath }
            />
          </label>
          <label htmlFor="textarea-sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="textarea-sinopse"
              type="text"
              data-testid="storyline-input"
              name={ storyline }
              onChange={ storyline }
            />
          </label>

        </form>
      </div>
    );
  }
}

export default AddMovie;
