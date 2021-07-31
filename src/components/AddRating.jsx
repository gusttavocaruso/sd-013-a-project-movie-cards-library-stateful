import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="add-rating"
          name="rating"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Rating.defaultProps = {
  value: 0,
};

export default Rating;
