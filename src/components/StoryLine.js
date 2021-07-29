import React from 'react';

class StoryLine extends React.Component {
  render() {
    return (
      <label data-testid="storyline-input-label" htmlFor="textArea">
        Sinopse
        <textarea
          name="storyLine"
          onChange={ this.handleChange }
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
