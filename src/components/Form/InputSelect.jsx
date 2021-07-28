import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { name, value, onChange, children, options } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor={ name }>
        {children}
        <select
          data-testid="select-input"
          type="text"
          value={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        >
          {options.map((option, index) => (
            <option key={ index } data-testid="select-option" value={ option.value }>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
