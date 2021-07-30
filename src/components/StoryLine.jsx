import React from 'react';

import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="sinopse"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default StoryLine;
