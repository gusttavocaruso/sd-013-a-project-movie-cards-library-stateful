import React from 'react';
import PropTypes from 'prop-types';

class Stars extends React.Component {
  render() {
    const { rating, updateState } = this.props;
    return (
      <div>
        <label htmlFor="stars" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            value={ rating }
            onChange={ updateState }
            data-testid="rating-input"
            type="number"
            id="stars"
          />
        </label>
      </div>
    );
  }
}

Stars.propTypes = {
  rating: PropTypes.number,
  updateState: PropTypes.func,
};

Stars.defaultProps = {
  rating: 0,
  updateState: () => { },
};

export default Stars;
