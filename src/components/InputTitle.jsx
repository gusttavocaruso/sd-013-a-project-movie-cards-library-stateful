import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          onChange={ onChange }
          value={ title }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
