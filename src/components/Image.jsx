import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="image"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Image.defaultProps = {
  imagePath: '',
};

export default Image;
