import React from 'react';
import PropTypes from 'prop-types';

class InputStory extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          name="storyline"
        />
      </label>
    );
  }
}

InputStory.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputStory;
