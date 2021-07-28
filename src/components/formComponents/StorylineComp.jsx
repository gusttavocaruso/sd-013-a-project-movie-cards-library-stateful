import React from 'react';
import PropTypes from 'prop-types';

class StoryLineComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          name="storyLine"
          onChange={ onChange }
          id="input-storyline"
          data-testid="storyline-input"
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

StoryLineComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

StoryLineComp.defaultProps = {
  value: '',
  onChange: '',
};

export default StoryLineComp;
