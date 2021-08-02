import React from 'react';

// const propriedades = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.state = propriedades;
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-title">
          Título
          <input
            id="input-title"
            type="text"
            data-testid="title-input"
            name={ title }
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
          Subtítulo
          <input
            id="input-subtitle"
            type="text"
            data-testid="subtitle-input"
            name={ subtitle }
            onChange={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-image">
          Imagem
          <input
            id="input-image"
            type="text"
            data-testid="image-input"
            name={ imagePath }
            onChange={ imagePath }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
