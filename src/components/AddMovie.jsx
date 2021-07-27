import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.inputMovie = this.inputMovie.bind(this);
    this.clear = this.clear.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputMovie({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  clear() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="inputTitle" data-testid="title-input-label">
            {' '}
            Título
            <input
              id="inputTitle"
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.inputMovie }
              data-testid="title-input"
            />
          </label>
          <label
            htmlFor="inputSubTitle"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              id="inputSubTitle"
              name="subtitle"
              data-testid="subtitle-input"
              value={ this.state.subtitle }
              onChange={ this.inputMovie }
            />
          </label>
          <label
            htmlFor="inputImage"
            data-testid="image-input-label"
          >
            Imagem
            <input
              type="text"
              id="inputImage"
              name="imagePath"
              value={ this.state.imagePath }
              data-testid="image-input"
              onChange={ this.inputMovie }
            />
          </label>
          <label htmlFor="inputTextArea" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={ this.state.storyline }
              onChange={ this.inputMovie }
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              data-testid="rating-input"
              name="rating"
              id="rating"
              onChange={ this.inputMovie }
              value={ this.state.rating }
            />
          </label>
          <label htmlFor="selectGenre" data-testid="genre-input-label">
            Gênero
            <select name="genre" id="selectGenre" data-testid="genre-input" value={ this.state.genre } onChange={ this.inputMovie }>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.clear }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
