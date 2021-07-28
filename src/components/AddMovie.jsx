import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyline: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            id="titulo"
            type="text"imagePath: '',
            // storyline: '',
            value={ title.value }
            data-testid="title-input"
            onChange={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitulo">
          Subtítulo
          <input
            id="subtitulo"
            type="text"
            value={ subtitle.value }
            data-testid="title-input"
            onChange={ subtitle }
          />
        </label>
        {/* <label data-testid="image-input-label" htmlFor="imagem">
          Imagem
          <input
            id="imagem"
            type="text"
            value={ imagePath.value }
            data-testid="image-input"
            onChange={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <input
            type="text"
            value={ storyline.value }
            data-testid="storyline-input"
            onChange={ storyline }
          />
        </label> */}
      </div>
    );
  }
}

export default AddMovie;
