import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      raiting: 0,
      genre: 'action',
    };
  } 

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
          />
        </label>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
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
