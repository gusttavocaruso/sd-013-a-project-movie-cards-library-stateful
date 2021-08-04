// Inputs criados com ajuda do Rogerio P. da Silva
import React from 'react';
import PropTypes from 'prop-types';

class InputSub extends React.Component {
  render() {
    const {
      subtitle,
      onChange,
    } = this.props;
    return (
      <label htmlFor="#" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

InputSub.propTypes = {
  subtitle: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputSub;
