import React from 'react';

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
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  hadleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (

      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            name="title"
            onChange={ this.hadleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            name="subtitle"
            onChange={ this.hadleChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            name="imagePath"
            onChange={ this.hadleChange }
          />
        </label>
        <label htmlFor="textArea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            onChange={ this.hadleChange }
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="number">
          Avaliação
          <input
            data-testid="rating-input"
            value={ rating }
            type="number"
            name="rating"
            onChange={ this.hadleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          <select data-testid="genre-input" value={ genre } onChange={ this.hadleChange } name="genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ (e) => this.onClick(e) } data-testid="send-button">
          Adicionar filme
        </button>
      </form>

    );
  }
}

export default AddMovie;
