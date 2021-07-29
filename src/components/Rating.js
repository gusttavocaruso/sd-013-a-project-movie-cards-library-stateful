import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <label data-testid="rating-input-label" htmlFor="avaliacao">
        Avaliação
        <input
          name="rating"
          onChange={ this.handleChange }
          data-testid="rating-input"
          value={ rating }
          id="avaliacao"
          type="number"
        />
      </label>
    );
  }
}

export default Rating;
