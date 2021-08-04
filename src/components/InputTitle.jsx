import React from 'react';
import Proptypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const {
      title,
      handleChange,
      subtitle,
      imagePath,
    } = this.props;

    return (
      <div>
        <label htmlFor="input-title-add" data-testid="title-input-label">
          <input
            id="input-title-add"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
          Título
        </label>
        <label htmlFor="input-subtitle-add" data-testid="subtitle-input-label">
          <input
            id="input-subtitle-add"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
          Subtítulo
        </label>
        <label htmlFor="input-image-add" data-testid="image-input-label">
          <input
            id="input-image-add"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
          Imagem
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  title: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  subtitle: Proptypes.string.isRequired,
  imagePath: Proptypes.string.isRequired,
};

export default InputTitle;
