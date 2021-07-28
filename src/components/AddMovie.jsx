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
    this.inputRating = this.inputRating.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  resetState() {
    document.querySelector('.my-form').reset();
    const { onClick } = this.props;
    onClick(this.state);
    return (
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      })
    );
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

  textareaGenerator(name, id, test) {
    return (
      <textarea
        name={ name }
        id={ id }
        data-testid={ test }
        onChange={ this.handleChange }
      />
    );
  }

  inputRating(value) {
    return (
      <input
        name="rating"
        type="number"
        onChange={ this.handleChange }
        id="input-number"
        data-testid="rating-input"
        value={ value }
      />
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="my-form">
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
          { this.textareaGenerator('storyline', 'input-text-area', 'storyline-input')}
        </label>
        <label htmlFor="input-number" data-testid="rating-input-label">
          Avaliação
          { this.inputRating(rating) }
        </label>
        <label htmlFor="input-option" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="input-option" data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
