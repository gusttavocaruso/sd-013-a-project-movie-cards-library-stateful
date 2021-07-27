import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends Component {
  render() {
    const { imagePath, onChangeFunc } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          id="image"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

AddMovieImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieImage;
