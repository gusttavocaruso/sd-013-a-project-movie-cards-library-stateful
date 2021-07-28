import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="rating"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
