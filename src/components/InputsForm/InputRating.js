import React, { Component } from 'react';

class InputRating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-rate" data-testid="rating-input-label">
          Avaliação
          <input
            step="0.5"
            id="movie-rate"
            type="number"
            name="rating"
            value={ rating }
            onChange={ onChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

export default InputRating;
