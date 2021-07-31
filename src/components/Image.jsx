import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, updateState } = this.props;
    return (
      <div>
        <label htmlFor="input-image-path" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            onChange={ updateState }
            data-testid="image-input"
            type="text"
            id="input-image-path"
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  updateState: PropTypes.func,
};

Image.defaultProps = {
  imagePath: '',
  updateState: () => { },
};

export default Image;
