import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { testId, name, value, onChange, children, options } = this.props;
    return (
      <label data-testid={ `${testId}-label` } htmlFor={ name }>
        {children}
        <select
          data-testid={ testId }
          type="text"
          value={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        >
          {options.info.map((option, index) => (
            <option
              key={ index }
              data-testid={ `${options.name}-option` }
              value={ option.value }
            >
              {option.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
