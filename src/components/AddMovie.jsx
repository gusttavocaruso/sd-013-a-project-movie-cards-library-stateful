import React, { Component } from 'react';

class AddMovie extends Component {

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

  // Função desenvolvida com a ajuda do repósitório de aulas da T13A no dia 12.2
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="aaa" data-testid="title-input-label" title={ title }>
          Título
          <input name="title" id="aaa" data-testid="title-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="bbb" data-testid="subtitle-input-label" subtitle={ subtitle }>
          Subtítulo
          <input name="subtitle" id="bbb" data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="ccc" data-testid="image-input-label" imagePath={ imagePath }>
          Imagem
          <input name="imagePath" id="ccc" data-testid="image-input" onChange={ this.handleChange } />
        </label>

        <label htmlFor="ddd" data-testid="storyline-input-label" storyline={ storyline }>
          Sinopse
          <textarea name="storyline" data-testid="storyline-input" onChange={ this.handleChange } />

        </label>
      </form>
    );
  }
}

export default AddMovie;
