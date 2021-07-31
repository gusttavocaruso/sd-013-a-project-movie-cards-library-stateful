import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ratings extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating"
      >
        Avaliação
        <input
          value={ value }
          data-testid="rating-input"
          type="number"
          name="rating"
          id=""
          onChange={ onChange }
        />
      </label>
    );
  }
}

Ratings.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Ratings;
