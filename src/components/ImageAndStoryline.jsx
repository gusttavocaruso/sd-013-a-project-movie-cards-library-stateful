import React from 'react';
import PropTypes from 'prop-types';

class ImageAndStoryline extends React.Component {
  render() {
    const { onChange, imagePath, storyline } = this.props;
    return (
      <div>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            className="input-box"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            className="input-box"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ImageAndStoryline.propTypes = {
  onChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default ImageAndStoryline;
