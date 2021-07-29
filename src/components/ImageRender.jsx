import React, { Component } from 'react';

class ImageRender extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImageRender;
