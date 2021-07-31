import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input type="text" id="title" data-testid="title-input" />
      </label>
    );
  }
}

export default Title;
