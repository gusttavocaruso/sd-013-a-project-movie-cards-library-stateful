import React from 'react';
import PropTypes from 'prop-types';

class ImagePathUrl extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePathUrl.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePathUrl;
