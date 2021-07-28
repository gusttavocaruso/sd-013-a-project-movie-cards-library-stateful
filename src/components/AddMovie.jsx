import React from 'react';
import PropTypes from 'prop-types';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInitial;
    this.handleChange = this.handleChange.bind(this); // 1
    this.handleClick = this.handleClick.bind(this); // 2
  }

  handleChange({ target }) { // 1
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() { // 2
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateInitial);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={ title }
            data-testid="title-input"
            id="title"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            value={ subtitle }
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            value={ imagePath }
            data-testid="image-input"
            id="image"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <input
            value={ storyline }
            data-testid="storyline-input"
            id="storyline"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            id="rating"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            id="genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
