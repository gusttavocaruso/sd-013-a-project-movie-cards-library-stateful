import React, { Component } from 'react';

class InputTitle extends Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            id="movie-title"
            value={ title }
            onChange={ onChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }
}

export default InputTitle;
