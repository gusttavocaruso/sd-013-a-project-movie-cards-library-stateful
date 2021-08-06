import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="add-title">
        Título:
        <input
          id="add-title"
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
