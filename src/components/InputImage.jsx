import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImage extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="inputImage"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          id="inputImage"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
