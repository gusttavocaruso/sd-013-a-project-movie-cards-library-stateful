import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          name="image"
          id="image"
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: Proptypes.string,
  onChange: Proptypes.func,
}.isRequired;

export default ImagePath;
