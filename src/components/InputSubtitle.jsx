import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtile extends Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={ onChange }
          subtile={ subtitle }
        />
      </label>
    );
  }
}

InputSubtile.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtile;
