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
    this.changeStateProperty = this.changeStateProperty.bind(this);
  }

  getProperty = (property) => this.state.property;

  changeStateProperty = (e) => {
    // console.log(e.target.getAttribute('property'));
    const property = e.target.getAttribute('property');
    this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            data-testid="title-input"
            property="title"
            type="text"
            value={ this.state.title }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            property="subtitle"
            type="text"
            value={ this.state.subtitle }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem:
          <input
            data-testid="image-input"
            property="imagePath"
            type="text"
            value={ this.state.imagePath }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            property="storyline"
            type="text"
            value={ this.state.storyline }
            onChange={ this.changeStateProperty.bind(this) }
            rows="4"
            cols="50"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação:
          <input
            data-testid="rating-input"
            property="rating"
            type="number"
            value={ this.state.rating }
            onChange={ this.changeStateProperty.bind(this) }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero:
          <select
            data-testid="genre-input"
            property="genre"
            value={ this.state.genre }
            onChange={ this.changeStateProperty.bind(this) }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
