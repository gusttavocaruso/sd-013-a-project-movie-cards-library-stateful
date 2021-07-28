import React from 'react';

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
          {options.map((option) => (
            <option data-testid="select-option" value={ option.value }>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputSelect;
