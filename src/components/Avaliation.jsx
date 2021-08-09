import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Avaliation extends Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="rating"
          value={ Number(rating) }
          onChange={ onChange }
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
