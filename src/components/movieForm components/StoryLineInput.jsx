import React from 'react';
import PropTypes from 'prop-types';

class StoryLineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse:
        <input
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ value }
          id="storyline"
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLineInput;
