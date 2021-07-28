import React from 'react';
import PropTypes from 'prop-types';

class StoryLineComp extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="input-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          name="storyline"
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
  storyline: PropTypes.string,
  onChange: PropTypes.func,
};

StoryLineComp.defaultProps = {
  storyline: '',
  onChange: '',
};

export default StoryLineComp;
