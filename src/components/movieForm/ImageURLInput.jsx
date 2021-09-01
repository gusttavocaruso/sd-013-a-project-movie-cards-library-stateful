import React from 'react';
import PropTypes from 'prop-types';

class ImageURLInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagepath" data-testid="image-input-label">
        Imagem:
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ value }
          id="imagePath"
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageURLInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageURLInput;
