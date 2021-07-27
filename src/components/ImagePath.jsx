import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { valueComp, onChangeComp } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="imagePath"
          data-testid="image-input"
          value={ valueComp }
          onChange={ onChangeComp }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  valueComp: PropTypes.string.isRequired,
  onChangeComp: PropTypes.func.isRequired,
};

export default ImagePath;
