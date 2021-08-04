import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagem extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="image-input-label"
        htmlFor="input_image"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ value }
          name="imagePath"
          onChange={ onChange }
          id="input_image"
        />
      </label>
    );
  }
}

InputImagem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImagem;
