import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Avaliation extends Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="rating"
          value={ Number(rating) }
          onChange={ onChange }
          min="0"
          max="5"
          step="0.1"
          type="number"
        />
      </label>
    );
  }
}

Avaliation.propTypes = {
  rating: Proptypes.number,
  onChange: Proptypes.func,
}.isRequired;

export default Avaliation;
