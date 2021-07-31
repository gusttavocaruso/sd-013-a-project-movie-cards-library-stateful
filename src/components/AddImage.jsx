import React from 'react';
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="add-image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="add-image"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Img.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Img.defaultProps = {
  value: '',
};

export default Img;
