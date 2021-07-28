import React from 'react';

class Field extends React.Component {
  render() {
    const { labelTestId, htmlFor, text, type, id, name, inputTestId, value, onChange } = this.props;
    return (
      <label data-testid={ labelTestId } htmlFor={ htmlFor }>
        {text}
        <input 
          type={ type }
          id={ id }
          name={ name }
          data-testid={ inputTestId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    )
  }
}

export default Field;