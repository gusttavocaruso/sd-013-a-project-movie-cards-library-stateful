import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title"
      >
        Título
        <input
          value={ value }
          data-testid="title-input"
          type="text"
          name="title"
          id=""
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
