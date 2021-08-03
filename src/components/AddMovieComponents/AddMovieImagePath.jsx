import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image"
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;
