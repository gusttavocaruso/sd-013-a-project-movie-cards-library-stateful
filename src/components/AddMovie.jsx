import React from 'react';

import movies from '../data';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'adicionar') {
      // console.log(event.target.id);
      movies.push({
        title: this.title,
        subtitle: this.subtitle,
        imagePath: this.imagePath,
        storyline: this.storyline,
        rating: this.rating,
        genre: this.genre,
        bookmarked: false,
      });

      this.setState({
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
        bookmarked: false,
      });
    }
    const { name } = event.target;
    const value = (event.target.type === 'checkbox')
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre, bookmarked } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="título" data-testid="title-input-label">
          Título
          <input type="text" id="título" name="title" value={ title } onChange={ this.handleChange } data-testid="title-input" />
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="subtitulo" name="subtitle" value={ subtitle } onChange={ this.handleChange } data-testid="subtitle-input" />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input type="text" id="imagem" name="imagePath" value={ imagePath } onChange={ this.handleChange } data-testid="image-input" />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" id="sinopse" name="storyline" value={ storyline } onChange={ this.handleChange } data-testid="storyline-input" />
        </label>
        <label htmlFor="avaliação" data-testid="rating-input-label">
          Avaliação
          <input type="number" id="avaliação" name="rating" min="1" max="10" value={ rating } onChange={ this.handleChange } data-testid="rating-input" />
        </label>
        <label htmlFor="favorito" data-testid="rating-input-label">
          Favorito
          <input type="checkbox" id="favorito" name="rating" value={ bookmarked } onChange={ this.handleChange } />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="genero" value={ genre } onChange={ this.handleChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" id="adicionar" data-testid="send-button" onClick={ this.handleChange }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
