import React from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="story_line_id_input"
      >
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="story_line_id_input"
          cols="30"
          rows="10"
          value={ value }
          name="storyline"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextarea.propTypes = {
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputTextarea;
