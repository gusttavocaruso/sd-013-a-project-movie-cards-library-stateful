import React, { Component } from 'react';

class InputStoryline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ onChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

export default InputStoryline;
