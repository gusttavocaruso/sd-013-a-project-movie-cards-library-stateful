import React from 'react';
import PropTypes from 'prop-types';

class RatingComp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input-rating">
        Avaliação
        <input
          value={ value }
          data-testid="rating-input"
          type="number"
          onChange={ onChange }
          name="rating"
          id="input-rating"
        />
      </label>
    );
  }
}

RatingComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

RatingComp.defaultProps = {
  value: '',
  onChange: '',
};

export default RatingComp;
