import React from 'react';
import Proptypes from 'prop-types';

class InputImg extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ value }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

InputImg.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default InputImg;
