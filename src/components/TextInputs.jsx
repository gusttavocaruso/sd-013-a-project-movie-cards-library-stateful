import React from 'react';
import PropTypes from 'prop-types';

class TextInputs extends React.Component {
  getInputsProperties = (name, value, alternativeNameTestId) => {
    const { handleChange } = this.props;

    return {
      value,
      name,
      onChange: handleChange,
      id: name,
      'data-testid': `${alternativeNameTestId || name}-input`,
    };
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
    } = this.props;

    return (
      <>
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            { ...this.getInputsProperties('title', title) }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            { ...this.getInputsProperties('subtitle', subtitle) }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            { ...this.getInputsProperties('imagePath', imagePath, 'image') }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            { ...this.getInputsProperties('storyline', storyline) }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            { ...this.getInputsProperties('rating', rating) }
          />
        </label>
      </>
    );
  }
}

TextInputs.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TextInputs;
