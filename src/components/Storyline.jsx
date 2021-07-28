import React from 'react';

class Sinopse extends React.Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Sinopse;
