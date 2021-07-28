import React, { Component } from 'react';
import PropTypes from 'prop-types';

const stateInicial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'açao',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.hadleChange = this.hadleChange.bind(this);
    this.hadleonClick = this.hadleonClick.bind(this);
    this.state = stateInicial;
  }

  hadleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  hadleonClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInicial);
  }

  title(title) { // criando funções para chamar npo render com o "this"
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Titulo
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  subtitle(subtitle) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  imagePath(imagePath) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  storyline(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  rating(rating) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  genre(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          type="number"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.hadleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  button() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.hadleonClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.title(title) }
        { this.subtitle(subtitle) }
        { this.imagePath(imagePath) }
        { this.storyline(storyline) }
        { this.rating(rating) }
        { this.genre(genre) }
        { this.button()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
