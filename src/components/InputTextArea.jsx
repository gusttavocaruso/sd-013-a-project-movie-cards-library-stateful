import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label
        htmlFor="imagePath"
        data-testid="storyline-input-label"
      >
        Sinopse
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          data-testid="storyline-input"
          onChange={ onChange }
          value={ storyline }
          storyline={ storyline }

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
