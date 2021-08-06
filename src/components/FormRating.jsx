import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="add-rating">
        Avaliação:
        <input
          id="add-rating"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

FormRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
