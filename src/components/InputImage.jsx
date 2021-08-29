import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, clickReset } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="Imagem">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ clickReset }
          name="imagem"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string,
  clickReset: PropTypes.func,
}.isRequired;

export default InputImage;
