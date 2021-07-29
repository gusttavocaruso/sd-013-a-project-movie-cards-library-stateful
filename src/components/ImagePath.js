import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          onChange={ this.handleChange }
          value={ imagePath }
          data-testid="image-input" id="imagePath"type="text"
        />
      </label>
    );
  }
}

export default ImagePath;
