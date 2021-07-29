import React from 'react';
import PropTypes from 'prop-types';

class RenderImg extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imgText">
        Imagem:
        <input
          type="text"
          name="imagePath"
          id="imgText"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

RenderImg.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RenderImg;
