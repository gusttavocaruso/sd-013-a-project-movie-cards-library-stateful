import React from 'react';
import PropTypes from 'prop-types';

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

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
};

ImagePath.defaultProps = {
  imagePath: '',
  onChange: {},
};

export default ImagePath;
