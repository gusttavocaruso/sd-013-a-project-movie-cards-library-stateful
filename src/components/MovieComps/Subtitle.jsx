import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
      Subtítulo
      <input
        name="subtitle"
        type="text"
        value={ subtitle }
        onChange={ handleChange }
        data-testid="subtitle-input"
      />
    </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitle;
