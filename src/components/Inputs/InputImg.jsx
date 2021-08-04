// Inputs criados com ajuda do Rogerio P. da Silva
import React from 'react';
import PropTypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const {
      imagePath,
      onChange,
    } = this.props;
    return (
      <label htmlFor="#" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ onChange }
          data-testid="image-input"
          name="imagePath"
        />
      </label>
    );
  }
}

InputImg.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputImg;
