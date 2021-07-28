import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rotten extends Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="nota">
        Avaliação
        <input
          name="nota"
          type="number"
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
