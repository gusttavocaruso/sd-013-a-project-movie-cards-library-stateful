import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.setChange = this.setChange.bind(this);
    this.setInput = this.setInput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  setChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setInput(type, nome, data, valor) {
    return (
      <input
        type={ type }
        name={ nome }
        data-testid={ data }
        value={ valor }
        onChange={ this.setChange }
      />
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="título" data-testid="title-input-label">
          Título
          {this.setInput('text', 'title', 'title-input', title)}
        </label>
        <label htmlFor="subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          {this.setInput('text', 'subtitle', 'subtitle-input', subtitle)}
        </label>
        <label htmlFor="caminho da imagem" data-testid="image-input-label">
          Imagem
          {this.setInput('text', 'imagePath', 'image-input', imagePath)}
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.setChange }
            name="storyline"
          />
        </label>
        <label htmlFor="avaliação" data-testid="rating-input-label">
          Avaliação
          {this.setInput('number', 'rating', 'rating-input', rating)}
        </label>
        <label htmlFor="gênero" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            onChange={ this.setChange }
            name="genre"
            data-testid="genre-input"
            id="gênero"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
