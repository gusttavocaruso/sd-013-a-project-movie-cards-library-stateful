import React, { Component } from 'react';

import PropTypes from 'prop-types';

class StorylineInput extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default StorylineInput;
