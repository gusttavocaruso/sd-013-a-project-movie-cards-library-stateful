import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          id="imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}.isRequired;

export default Imagem;
