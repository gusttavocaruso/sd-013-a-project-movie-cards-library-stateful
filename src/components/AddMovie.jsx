import React from 'react';
import PropTypes from 'prop-types';

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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    console.log(event.target);
  }

  createInput(type, nome, data, valor) {
    return (
      <input
        type={ type }
        name={ nome }
        data-testid={ data }
        value={ valor }
        onChange={ this.handleChange }
      />
    );
  }

  createSelect(data, nome, value) {
    return (
      <select
        data-testid={ data }
        name={ nome }
        value={ value }
        onChange={ this.handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  createTextArea(nome, data, valor) {
    return (
      <textarea
        cols="30"
        rows="5"
        data-testid={ data }
        name={ nome }
        value={ valor }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="##" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          {this.createInput('text', 'title', 'title-input', title)}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          {this.createInput('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero:
          { this.createSelect('genre-input', 'genre', genre) }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          {this.createInput('text', 'imagePath', 'image-input', imagePath)}
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação:
          {this.createInput('number', 'rating', 'rating-input', rating)}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          { this.createTextArea('storyline', 'storyline-input', storyline) }
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.defaultProps = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
