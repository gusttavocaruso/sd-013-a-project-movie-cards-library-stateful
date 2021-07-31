import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle"
      >
        Subtítulo
        <input
          value={ value }
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id=""
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
