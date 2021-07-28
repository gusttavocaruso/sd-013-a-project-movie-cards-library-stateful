import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form action="##" data-testid="add-movie-form">
        <label htmlFor="##">
          Título:
          <input type="text" />
        </label>
        <label htmlFor="##">
          Subtítulo:
          <input type="text" />
        </label>
        <label htmlFor="##">
          Gênero:
          <input type="text" />
        </label>
        <label htmlFor="##">
          Imagem:
          <input type="text" />
        </label>
        <label htmlFor="##">
          Avaliação:
          <input type="text" />
        </label>
        <label htmlFor="##">
          Sinopse:
          <textarea cols="30" rows="5" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
