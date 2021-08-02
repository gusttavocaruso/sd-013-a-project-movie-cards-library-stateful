import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label
        htmlFor="story"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          id="story"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  handleChange: PropTypes.func,
  storyline: PropTypes.string,
}.isRequired;

export default StorylineInput;
