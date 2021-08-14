import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentCard extends Component {
  render() {
    const { imagePath, handleChange, rating, storyline } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            id="imagePath"
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ handleChange }
            value={ imagePath }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            id="rating"
            type="number"
            name="rating"
            data-testid="rating-input"
            onChange={ handleChange }
            value={ rating }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            type="text"
            name="storyline"
            data-testid="storyline-input"
            onChange={ handleChange }
            value={ storyline }
          />
        </label>
      </div>
    );
  }
}
ContentCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
