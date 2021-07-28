import React, { Component } from 'react';

class AddMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Função desenvolvida com a ajuda do repósitório de aulas da T13A no dia 12.2
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Função desenvolvida com a ajuda da pessoa estudante Luíza Antiques

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="aaa" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="aaa"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
        <label htmlFor="bbb" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="bbb"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="ccc" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="ccc"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>
        <label htmlFor="ddd" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="ddd"
            name="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
          />
        </label>

        <label htmlFor="eee" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="eee"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ rating }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
