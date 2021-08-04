import React from 'react';
import PropTypes from 'prop-types';

class ImageChange extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-change"
      >
        Imagem
        <input
          value={ imagePath }
          onChange={ onChange }
          id="image-change"
          name="imagePath"
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }
}

ImageChange.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
};

ImageChange.defaultProps = {
  imagePath: '',
  onChange: [],
};

export default ImageChange;
