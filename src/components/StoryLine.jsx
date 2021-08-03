import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="StoryLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          value={ value }
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default StoryLineInput;
