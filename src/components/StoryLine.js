import React from 'react';

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

export default StoryLine;
