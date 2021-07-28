import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const onClick = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
        </label>
        <input type="text" id="title" data-testid="title-input" onChange={ this.state.title } />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="subtitle" value={ this.state.subtitle } data-testid="subtitle-input" onChange={ this.state.subtitle } />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input type="text" id="image" value={ this.state.imagePath } data-testid="image-input" onChange={ this.state.imagePath } />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea name="" id="sinopse" cols="30" rows="10" data-testid="storyline-input" onChange={ this.state.storyline } ></textarea>
        </label>
      </form>
    );
  }
}

export default AddMovie;
