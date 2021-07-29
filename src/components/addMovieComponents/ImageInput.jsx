import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { HandleChange, componentName } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          type="text"
          value={ componentName }
          data-testid="image-input"
          onChange={ HandleChange }
          name="imagePath"
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  HandleChange: PropTypes.func,
  componentName: PropTypes.string,
};

ImageInput.defaultProps = {
  HandleChange: undefined,
  componentName: undefined,
};

export default ImageInput;
