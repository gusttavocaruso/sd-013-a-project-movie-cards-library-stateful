import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const {
      value, onChange } = this.props;
    return (
      <label
        htmlFor="searchText"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
