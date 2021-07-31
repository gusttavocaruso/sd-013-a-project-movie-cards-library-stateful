import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
