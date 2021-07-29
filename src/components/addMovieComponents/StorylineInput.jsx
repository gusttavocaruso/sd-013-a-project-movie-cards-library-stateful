import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { HandleChange, componentValue } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          value={ componentValue }
          data-testid="storyline-input"
          onChange={ HandleChange }
          name="storyline"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  HandleChange: PropTypes.func,
  componentValue: PropTypes.string,
};

StorylineInput.defaultProps = {
  HandleChange: undefined,
  componentValue: undefined,
};

export default StorylineInput;
