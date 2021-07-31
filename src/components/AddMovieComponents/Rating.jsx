import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default Rating;
