import React from 'react';
import PropTypes from 'prop-types';

class FormAddMovie extends React.Component {
  render() {
    const { imagePath, storyline, rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            cols="30"
            onChange={ handleChange }
          >
            { storyline }
          </textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select name="genre" data-testid="genre-input" onChange={ handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

FormAddMovie.propTypes = {
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default FormAddMovie;
