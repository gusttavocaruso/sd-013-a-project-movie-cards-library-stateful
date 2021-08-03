import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

RateRender.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RateRender;
