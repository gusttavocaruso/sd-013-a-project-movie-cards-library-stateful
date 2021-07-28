import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryLine extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="inputTextArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
