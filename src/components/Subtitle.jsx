import React from 'react';

class Subtitle extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          // onChange={ handleChange }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;
