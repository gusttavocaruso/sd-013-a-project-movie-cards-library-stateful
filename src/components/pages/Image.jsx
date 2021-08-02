import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem:
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Image;
