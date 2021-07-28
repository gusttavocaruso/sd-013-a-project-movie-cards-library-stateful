import React from 'react';
import PropTypes from 'prop-types';

class StoryLineAddMovie extends React.Component {
  render() {
    const { storylineValue, onChange } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="Sinopse"
          data-testid="storyline-input"
          value={ storylineValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

StoryLineAddMovie.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLineAddMovie;
