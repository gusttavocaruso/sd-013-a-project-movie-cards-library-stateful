import React from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends React.Component {
  render() {
    const { testId, name, value, onChange, children } = this.props;
    return (
      <label data-testid={ `${testId}-label` } htmlFor={ name }>
        {children}
        <textarea
          data-testid={ testId }
          value={ value }
          onChange={ onChange }
          name={ name }
          id={ name }
        />
      </label>
    );
  }
}

InputTextarea.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputTextarea;
