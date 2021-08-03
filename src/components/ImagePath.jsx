import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="Image">
        Imagem
        <input
          name="imagePath"
          id="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
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
