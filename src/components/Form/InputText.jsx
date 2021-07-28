import React from 'react';
import PropTypes from 'prop-types';

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

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputText;
