import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { testId, name, value, onChange, children } = this.props;
    return (
      <label data-testid={ `${testId}-label` } htmlFor={ name }>
        {children}
        <input
          data-testid={ testId }
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

InputCheckbox.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputCheckbox;
