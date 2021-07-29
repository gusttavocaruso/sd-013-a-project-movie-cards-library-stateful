import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          type="text"
          name="storyline"
          cols="30"
          rows="10"
          id="soryline"
          data-testid="storyline-input"
          onChange={ onChange }
          value={ storyline }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
