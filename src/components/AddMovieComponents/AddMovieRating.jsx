import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Rating;
