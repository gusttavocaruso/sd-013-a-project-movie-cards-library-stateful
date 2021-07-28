import React from 'react';
import PropTypes from 'prop-types';

class ImageComp extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          data-testid="image-input"
          type="text"
          onChange={ onChange }
          name="imagePath"
          id="input-image"
        />
      </label>
    );
  }
}

ImageComp.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
};

ImageComp.defaultProps = {
  imagePath: '',
  onChange: '',
};

export default ImageComp;
