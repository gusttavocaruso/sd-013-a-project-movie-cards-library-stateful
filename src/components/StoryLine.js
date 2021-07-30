import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { storyLine, onChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="textArea">
        Sinopse
        <textarea
          name="storyLine"
          onChange={ onChange }
          data-testid="storyline-input"
          id="textArea"
        >
          { storyLine }
        </textarea>
      </label>
    );
  }
}

StoryLine.propTypes = {
  storyLine: PropTypes.string,
  onChange: PropTypes.func,
};

StoryLine.defaultProps = {
  storyLine: '',
  onChange: {},
};

export default StoryLine;
