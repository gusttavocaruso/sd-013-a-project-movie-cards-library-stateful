import React, { Component } from 'react';

class RateRender extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rate" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default RateRender;
