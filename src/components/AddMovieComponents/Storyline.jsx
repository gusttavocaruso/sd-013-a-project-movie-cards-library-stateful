import React from 'react';

class Storyline extends React.Component {
  render() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea id="storyline" data-testid="storyline-input" cols="30" rows="10" />
      </label>
    );
  }
}

export default Storyline;
