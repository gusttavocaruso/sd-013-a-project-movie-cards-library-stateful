import React from 'react';

class Input extends React.Component {
  render() {
    const { label, name, value, onChange, testid } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${testid}-label` }>
        {label}
        <input
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testid }
        />
      </label>
    );
  }
}

export default Input;
