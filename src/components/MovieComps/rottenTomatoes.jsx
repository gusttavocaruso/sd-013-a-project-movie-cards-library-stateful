import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rotten extends Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rotten.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rotten;
