import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageSinopsis.css';

class ImageSinopsis extends Component {
  render() {
    const { imagePath, storyline, handleChange } = this.props;
    return (
      <div>
        <div>
          <label
            htmlFor="input-image"
            data-testid="image-input-label"
            className="label-form"
          >
            Imagem
            <input
              name="imagePath"
              placeholder="Insira uma imagem"
              type="text"
              id="input-image"
              value={ imagePath }
              data-testid="image-input"
              onChange={ handleChange }
            />
          </label>
        </div>
        <label
          htmlFor="text-area"
          data-testid="storyline-input-label"
          className="label-form"
        >
          Sinopse
          <textarea
            name="storyline"
            id="text-area"
            placeholder="Insira a sinopse do filme"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ImageSinopsis.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageSinopsis;
