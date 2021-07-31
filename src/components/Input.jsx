import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, name, value, onChange, testid, type } = this.props;

    return (
      <label htmlFor={ name } data-testid={ `${testid}-label` }>
        {label}
        <input
          type={ type || 'text' }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number']),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
