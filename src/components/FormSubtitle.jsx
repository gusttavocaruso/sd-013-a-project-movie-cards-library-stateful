import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="add-subtitle">
        Subtítulo:
        <input
          id="add-subtitle"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
