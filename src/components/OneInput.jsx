import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneInput extends Component {
  render() {
    const {
      title,
      subtitle,
      imagePath,
      handleChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="label-tittle" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="label-tittle"
            data-testid="title-input"
            onChange={ handleChange }
            value={ title }
          />
        </label>
        <label htmlFor="label-sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="label-sub"
            data-testid="subtitle-input"
            onChange={ handleChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="label-img" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="label-img"
            data-testid="image-input"
            onChange={ handleChange }
            value={ imagePath }
          />
        </label>
      </div>
    );
  }
}

OneInput.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

OneInput.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
};

export default OneInput;
