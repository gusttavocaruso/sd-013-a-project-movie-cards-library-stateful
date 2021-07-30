import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          onChange={ onChange }
          value={ imagePath }
          data-testid="image-input"
          id="imagePath"
          type="text"
        />
      </label>
    );
  }
}

export default ImagePath;
