import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSub extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ value }
          name="subtitle"
          id="subtitle"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSub.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSub;
