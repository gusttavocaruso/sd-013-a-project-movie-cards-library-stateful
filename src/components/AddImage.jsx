import PropTypes from 'prop-types';
import React from 'react';

class AddImage extends React.Component {
  render() {
    const { imagePath, handleChangeText } = this.props;
    return (
      <label htmlFor="input-change-image" data-testid="image-input-label">
        Imagem
        <input
          type="texto"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChangeText }
          id="input-change-image"
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddImage;
