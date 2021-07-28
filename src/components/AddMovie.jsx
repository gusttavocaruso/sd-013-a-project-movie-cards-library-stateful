// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types'

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text2" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-text2"
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
          />
        </label>
        <label htmlFor="input-text3" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="input-text3"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            name="subtitle"
          />
        </label>
        <label htmlFor="input-text4" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="input-text4"
            data-testid="image-input"
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
        <label htmlFor="input-text-area" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            id="input-text-area"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
