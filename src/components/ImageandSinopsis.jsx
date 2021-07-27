import React from 'react';
import PropTypes from 'prop-types';

class ImageandSinopsis extends React.Component {
  render() {
    const { imagePath, storyline, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-image-path" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            id="input-image-path"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="text-area-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="text-area-storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ImageandSinopsis.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ImageandSinopsis;
