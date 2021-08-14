import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação
        <input
          name="ratingInput"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.defaultProps = {
  value: 0,
};

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
