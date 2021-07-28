import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          data-testid="image-input"
          onChange={ onChange }
          value={ imagePath }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
