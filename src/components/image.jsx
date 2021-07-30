import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="ImagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
Imagem.defaultProps = {
  value: '',
  handleChange: 'function',
};

export default Imagem;
