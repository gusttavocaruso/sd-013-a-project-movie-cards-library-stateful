import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title"
          onChange={ this.handleChange }
          type="text"
          value={ title }
        />
      </label>
    );
  }
}

export default Title;
