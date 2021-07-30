import React from 'react';
import Genre from './Genre';
import Image from './Image';
import StoryLine from './StoryLine';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      genre: 'action',
      rating: 0,
      storyline: '',
    };
  }
  // Aula dia 26

  handleChange = (event) => {
    this.setState({
      // title: event.target.value,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitulo">
          Subtítulo
          <input
            name="subtitle"
            id="subtitulo"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="teste" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="teste"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          // onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;
