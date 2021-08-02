import React from 'react';
import PropTypes from 'prop-types';

class FormAddMovies extends React.Component {
  render() {
    const { title, subtitle, imagePath, changeTitle, storyline } = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="input-label">
          Título
          <input
            id="input-label"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagem-input">
          Imagem
          <input
            id="imagem-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="textarea-input">
          Sinopse
          <textarea
            id="textarea-input"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ changeTitle }
          />
        </label>
      </div>
    );
  }
}

FormAddMovies.propTypes = {
  imagePath: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
};

export default FormAddMovies;
