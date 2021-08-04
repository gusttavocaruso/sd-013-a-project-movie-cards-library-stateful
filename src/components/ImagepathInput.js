import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagepathInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          id="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagepathInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagepathInput;
