import React from 'react';
import PropTypes from 'prop-types';

class InputTextAddMovie extends React.Component {
  render() {
    const {
      onTitleChange,
      onSubtitleChange,
      onImagePathChange,
      title,
      subtitle,
      imagePath } = this.props;
    return (
      <section>
        <label htmlFor="input-title-add-movie" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="input-title-add-movie"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ onTitleChange }
          />
        </label>
        <label htmlFor="input-subtitle-add-movie" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="input-subtitle-add-movie"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onSubtitleChange }
          />
        </label>
        <label htmlFor="input-image-add-movie" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="input-image-add-movie"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onImagePathChange }
          />
        </label>
      </section>
    );
  }
}

InputTextAddMovie.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onSubtitleChange: PropTypes.func.isRequired,
  onImagePathChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default InputTextAddMovie;
