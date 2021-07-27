import React from 'react';

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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ event }) {
    event.preventDefault();
    const { name } = event.target;
    const value = (event.target.type === 'checkbox')
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="adicionar" data-testid="add-movie-form">
        <label htmlFor="título" data-testid="title-input-label">
          Título
          <input type="text" id="título" name="título" value={ title.value } onChange={ title } data-testid="title-input" />
        </label>
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="subtitulo" name="subtitulo" value={ subtitle.value } onChange={ subtitle } data-testid="subtitle-input" />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input type="text" id="imagem" name="imagem" value={ imagePath.value } onChange={ imagePath } data-testid="image-input" />
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <input type="textarea" id="sinopse" name="sinopse" value={ storyline.value } onChange={ storyline } data-testid="storyline-input" />
        </label>
        <label htmlFor="avaliação" data-testid="rating-input-label">
          Avaliação
          <input type="number" id="avaliação" name="avaliação" min="1" max="10" value={ rating.value } onChange={ rating } data-testid="rating-input" />
        </label>
        <label htmlFor="genero">
          Gênero
          <select name="genero" id="genero" onChange={ genre }>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" id="adicionar">Adicionar</button>
      </form>
    );
  }
}

export default AddMovie;
