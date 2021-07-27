import React from 'react';
import PropTypes from 'prop-types';

class RatingStateful extends React.Component {
  render() {
    const { valueComp, onChangeComp } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ valueComp }
          onChange={ onChangeComp }
        />
      </label>
    );
  }
}

RatingStateful.propTypes = {
  valueComp: PropTypes.string.isRequired,
  onChangeComp: PropTypes.func.isRequired,
};

export default RatingStateful;
