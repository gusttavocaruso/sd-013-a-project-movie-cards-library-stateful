import React, { Component } from 'react';

class InputTitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-add-movie" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="input-add-movie"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default InputTitle;
