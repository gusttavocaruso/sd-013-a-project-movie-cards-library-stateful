import React from 'react';

class InputCheckbox extends React.Component {
  render() {
    const { name, value, onChange, children } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor={ name }>
        {children}
        <input
          data-testid="checkbox-input"
          type="checkbox"
          checked={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        />
      </label>
    );
  }
}

export default InputCheckbox;
