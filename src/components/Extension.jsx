import React from 'react';
import PropTypes from 'prop-types';

class Extension extends React.Component {
  render() {
    const {
      title,
      subtitle,
      imagePath,
      change,
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
            onChange={ change }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ change }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ change }
          />
        </label>
      </div>
    );
  }
}

Extension.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  change: PropTypes.func.isRequired,
};

Extension.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
};

export default Extension;
