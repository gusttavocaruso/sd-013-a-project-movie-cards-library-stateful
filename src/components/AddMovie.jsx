import React from 'react';

class AddMovie extends React.Component {
  render() {
    // super();
    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="titulo"
            data-testid="title-input"
          />
        </label>
        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            name="subtitulo"
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
