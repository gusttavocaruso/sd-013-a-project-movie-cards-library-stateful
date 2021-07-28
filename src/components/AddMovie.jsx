import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const {
      title, subtitle, imagePath, storyLine, rating, genre,
    } = this.state;

    return (
      <span>
        subtitulo,
        titulo,
        caminho da imagem,
        sinopse,
        avaliação,
        gênero
      </span>
    );
  }
}

export default AddMovie;
