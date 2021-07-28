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
    this.inputGenerator = this.inputGenerator.bind(this);

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  inputGenerator(name, type, id, test) {
    return (<input
      name={ name }
      type={ type }
      id={ id }
      data-testid={ test }
      onChange={ this.handleChange }
    />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text2" data-testid="title-input-label">
          Título
          { this.inputGenerator('title', 'text', 'input-text2', 'title-input') }
        </label>
        <label htmlFor="input-text3" data-testid="subtitle-input-label">
          Subtítulo
          { this.inputGenerator('subtitle', 'text', 'input-text3', 'subtitle-input')}
        </label>
        <label htmlFor="input-text4" data-testid="image-input-label">
          Imagem
          { this.inputGenerator('imagePath', 'text', 'input-text4', 'image-input')}
        </label>
        <label htmlFor="input-text-area" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="input-text-area"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        <label htmlFor="input-number" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            onChange={ this.handleChange }
            id="input-number"
            data-testid="rating-input"
            value={ rating }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
