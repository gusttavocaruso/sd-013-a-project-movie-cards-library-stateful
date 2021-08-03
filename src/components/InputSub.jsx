import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSub extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="input_subTitle"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ value }
          name="subtitle"
          onChange={ onChange }
          id="input_subTitle"
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
