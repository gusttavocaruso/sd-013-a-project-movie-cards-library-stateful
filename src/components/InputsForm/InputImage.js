import React, { Component } from 'react';

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

export default InputImage;
