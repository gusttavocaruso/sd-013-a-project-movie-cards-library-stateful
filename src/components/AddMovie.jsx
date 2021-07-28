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
  handleClick = () => {
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

        <label htmlFor="fff" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="fff"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
