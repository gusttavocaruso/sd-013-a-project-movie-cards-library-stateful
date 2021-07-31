import React from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subitulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}.isRequired;

export default Subtitulo;
