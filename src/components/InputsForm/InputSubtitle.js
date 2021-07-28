import React, { Component } from 'react';

class InputSubtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="movie-subtitle"
            value={ subtitle }
            onChange={ onChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

export default InputSubtitle;
