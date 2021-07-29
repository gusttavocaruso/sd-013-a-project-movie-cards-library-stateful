import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="img-ipt">
          Imagem
          <input
            data-testid="image-input"
            id="img-ipt"
            type="text"
            value={ value }
            onChange={ onChange }
            name="imagePath"
          />
        </label>
      </div>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
