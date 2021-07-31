import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input type="text" id="image" data-testid="image-input" />
      </label>
    );
  }
}

export default ImagePath;
