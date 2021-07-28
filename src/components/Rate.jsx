import React from 'react';

class Rate extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rate">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          // onChange={ handleChange }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default Rate;
