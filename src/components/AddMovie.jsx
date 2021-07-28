import React, { Component } from 'react';
import PropTypes from 'prop-types';

const stateInicial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.hadleChange = this.hadleChange.bind(this); // 1
    this.hadleOnClick = this.hadleOnClick.bind(this); // 2
    this.state = stateInicial;
  }

  hadleChange({ target }) { // 1
    this.setState({
      [target.id]: target.value,
    });
  }

  hadleOnClick() { // 2
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInicial);
  }

  title(title) { // criando funções para chamar no "render" com o "this"
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Titulo
        <input
          type="text"
          id="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  subtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  imagePath(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          id="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  storyline(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  rating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          id="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.hadleChange }
        />
      </label>
    );
  }

  genre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          type="number"
          id="genre"
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
        onClick={ this.hadleOnClick }
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
