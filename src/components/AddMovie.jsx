import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
          />
        </label>
        <label htmlFor="title">
          Título
          <input
            name="title"
            type="text"
          />
        </label>
        <label htmlFor="imagem">
          Caminho da Imagem
          <input
            name="imagem"
            type="text"
          />
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <input
            name="sinopse"
            type="text"
          />
        </label>
        <label htmlFor="avaliação">
          Avaliação
          <input
            name="avaliação"
            type="text"
          />
        </label>
        <label htmlFor="gênero">
          Genêro
          <input
            name="gênero"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
