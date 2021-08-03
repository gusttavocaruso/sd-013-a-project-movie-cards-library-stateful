import React from 'react';
import PropTypes from 'prop-types';

class FormsInput extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyLine, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            value={ title }
            name="title"
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input"
            value={ imagePath }
            name="imagePath"
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyLine" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyLine"
            value={ storyLine }
            name="storyLine"
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

FormsInput.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

FormsInput.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyLine: '',
};

export default FormsInput;
