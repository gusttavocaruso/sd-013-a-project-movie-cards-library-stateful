import React, { Component } from 'react';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import ImagepathInput from './ImagepathInput';
import GenreInput from './GenreInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) { // event.target desconstruido
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>

        <ImagepathInput value={ imagePath } handleChange={ this.handleChange } />

        <StorylineInput value={ storyline } handleChange={ this.handleChange } />

        <RatingInput value={ rating } handleChange={ this.handleChange } />

        <GenreInput value={ genre } handleChange={ this.handleChange } />

        <button
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
