import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { testId, name, value, onChange, children } = this.props;
    return (
      <label data-testid={ `${testId}-label` } htmlFor={ name }>
        {children}
        <input
          data-testid={ testId }
          type="number"
          value={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputNumber;
