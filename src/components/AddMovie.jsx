import React from 'react';
import PropTypes from 'prop-types';

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

    this.changeStates = this.changeStates.bind(this);
  }

  changeStates(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            onChange={ this.changeStates }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.changeStates }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.changeStates }
          />
        </label>
        <label htmlFor="story-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.changeStates }
          ></textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.changeStates }
          />
        </label>
        <label htmlFor="genre-select" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="genre-select" value={ genre } data-testid="genre-input" onChange={ this.changeStates }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;
