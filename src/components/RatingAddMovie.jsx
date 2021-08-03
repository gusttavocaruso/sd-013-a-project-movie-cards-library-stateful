import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            name="rating"
            value={ value }
            id="rating"
            data-testid="rating-input"
            onChange={ onChange }
            type="number"
          />
        </label>
      </form>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
