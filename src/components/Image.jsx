import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagem">
        Imagem
        <input
          name="imagePath"
          id="imagem"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Image;
