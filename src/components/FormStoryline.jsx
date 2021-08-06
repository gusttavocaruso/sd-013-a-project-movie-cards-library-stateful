import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="add-storyline">
        Sinopse:
        <textarea
          id="add-storyline"
          // type="text"
          name="storyline"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

FormStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
