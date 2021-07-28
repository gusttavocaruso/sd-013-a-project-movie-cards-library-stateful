import React from 'react';
import PropTypes from 'prop-types';

class InputLabelText extends React.Component {
  render() {
    const { type, name, innerLabel, value, dataTestId, onChange } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${dataTestId}-input-label` }
      >
        {innerLabel}
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ `${dataTestId}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputLabelText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  innerLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputLabelText;
