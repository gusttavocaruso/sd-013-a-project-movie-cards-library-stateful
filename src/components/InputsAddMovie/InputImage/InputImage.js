import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            id="movie-image"
            value={ imagePath }
            onChange={ onChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
