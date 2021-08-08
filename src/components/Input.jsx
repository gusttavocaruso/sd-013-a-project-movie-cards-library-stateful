import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelText,
      labelDataType,
      value,
      checked,
      onChange,
      inputDataType,
      htmlFor,
      type,
      min,
      max,
      step,
    } = this.props;

    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ labelDataType }
      >
        { labelText }
        <input
          data-testid={ inputDataType }
          type={ type }
          name={ htmlFor }
          value={ value }
          onChange={ onChange }
          checked={ checked }
          min={ min }
          max={ max }
          step={ step }
        />
      </label>
    );
  }
}

const { string, func, bool } = PropTypes;

Input.propTypes = {
  labelText: string,
  labelDataType: string,
  value: string,
  checked: bool,
  onChange: func,
  inputDataType: string,
  htmlFor: string,
  inputType: string,
  min: string,
  max: string,
  step: string,
}.isRequired;

export default Input;
