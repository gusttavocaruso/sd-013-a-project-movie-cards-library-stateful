import React from 'react';
import PropTypes from 'prop-types';

class ImageComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          value={ value }
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
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ImageComp.defaultProps = {
  value: '',
  onChange: '',
};

export default ImageComp;
