import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          id="image"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  handleChange: PropTypes.func,
  imagePath: PropTypes.string,
}.isRequired;

export default ImageInput;
