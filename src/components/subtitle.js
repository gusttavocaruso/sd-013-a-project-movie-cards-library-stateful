import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitulo"
          type="text"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Subtitle;
