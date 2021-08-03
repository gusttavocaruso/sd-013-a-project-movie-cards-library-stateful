import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="input_title"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ value }
          name="title"
          onChange={ onChange }
          id="input_title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
