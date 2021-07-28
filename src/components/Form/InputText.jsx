import React from 'react';

class InputText extends React.Component {
  render() {
    const { name, value, onChange, children } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor={ name }>
        {children}
        <input
          data-testid="text-input"
          type="text"
          value={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        />
      </label>
    );
  }
}

export default InputText;
