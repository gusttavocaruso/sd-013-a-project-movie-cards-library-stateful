import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cartaz extends Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="img">
        Imagem
        <input
          name="img"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Cartaz.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cartas;
