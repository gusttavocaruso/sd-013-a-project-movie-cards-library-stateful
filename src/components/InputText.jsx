import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputText;
