import React from 'react';
import PropTypes from 'prop-types';

class Imagepath extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Imagepath.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default Imagepath;
