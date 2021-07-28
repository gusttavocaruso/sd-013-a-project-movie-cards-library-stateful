import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  render() {
    const { labelTestId, htmlFor, text, type, id, name,
      inputTestId, value, onChange } = this.props;
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
    );
  }
}

Field.propTypes = {
  labelTestId: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
