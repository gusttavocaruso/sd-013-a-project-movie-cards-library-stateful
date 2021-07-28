import React from 'react';
import PropTypes from 'prop-types';

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

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputCheckbox;
