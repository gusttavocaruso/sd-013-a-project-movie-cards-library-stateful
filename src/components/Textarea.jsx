import React from 'react';

class Textarea extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {label}
        <textarea
          id={ name }
          name={ name }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        >
          { value }
        </textarea>
      </label>
    );
  }
}

export default Textarea;
