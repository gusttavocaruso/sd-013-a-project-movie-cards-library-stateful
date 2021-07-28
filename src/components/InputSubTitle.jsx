import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class inputSubTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="inputSubTitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          id="inputSubTitle"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

inputSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
