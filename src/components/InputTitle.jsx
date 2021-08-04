import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ value }
          name="title"
          id="title"
          onChange={ onChange }
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
