import React from 'react';

class Subtitle extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input type="text" id="subtitle" data-testid="subtitle-input" />
      </label>
    );
  }
}

export default Subtitle;
