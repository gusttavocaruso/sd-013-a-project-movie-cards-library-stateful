// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    console.log('handleClick() method');
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <h1>AddMovie</h1>
        <form data-testid="add-movie-form">
          <label htmlFor="movie-title" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              id="movie-title"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              id="movie-subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>

          <label htmlFor="movie-image" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              id="movie-image"
              value={ imagePath }
              onChange={ this.handleChange }
              data-testid="image-input"
            />
          </label>

          <label htmlFor="movie-storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>

          <label htmlFor="movie-rate" data-testid="rating-input-label">
            Avaliação
            <input
              step="0.5"
              id="movie-rate"
              type="number"
              name="rating"
              value={ rating }
              onChange={ this.handleChange }
              data-testid="rating-input"
            />
          </label>

          <label htmlFor="movie-genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={ genre }
              data-testid="genre-input"
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>

        {/* <section>
          <h2>Filmes adicionados</h2>
          <p>Título: {title}</p>
          <p>Subtítulo: {subtitle}</p>
          Pôster<img src={imagePath} alt={title} />
          <p>Gênero: {genre}</p>
          <p>Sinopse: {storyline}</p>
          <p>Nota: {rating}</p>
        </section> */}
      </div>
    );
  }
}
