import React from 'react';
import PropTypes from 'prop-types';

class NewMovieInputs extends React.Component {
  render() {
    const {
      title,
      subtitle,
      imagePath,
      changeStates,
    } = this.props;

    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            onChange={ changeStates }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ changeStates }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ changeStates }
          />
        </label>
      </div>
    );
  }
}

NewMovieInputs.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  changeStates: PropTypes.func.isRequired,
};

NewMovieInputs.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
};

export default NewMovieInputs;
