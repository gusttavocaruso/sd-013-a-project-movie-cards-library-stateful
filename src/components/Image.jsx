import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            id="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
