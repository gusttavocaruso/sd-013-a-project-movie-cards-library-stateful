import React from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends React.Component {
  render() {
    const { imageValue, onChange } = this.props;
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          id="Imagem"
          data-testid="image-input"
          type="text"
          value={ imageValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageAddMovie.propTypes = {
  imageValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageAddMovie;
