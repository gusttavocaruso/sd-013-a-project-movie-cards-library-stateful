import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form action="##" data-testid="add-movie-form">
        <label htmlFor="##" data-testid="title-input-label">
          Título:
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="##" data-testid="subtitle-input-label">
          Subtítulo:
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="##">
          Gênero:
          <input type="text" />
        </label>
        <label htmlFor="##" data-testid="image-input-label">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="##">
          Avaliação:
          <input type="text" />
        </label>
        <label htmlFor="##" data-testid="storyline-input-label">
          Sinopse:
          <textarea cols="30" rows="5" data-testid="storyline-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
