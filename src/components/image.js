import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath } = this.props;

    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          name=""
          id="imagem"
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default ImagePath;
