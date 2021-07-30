import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="avaliacao">
        Avaliação
        <input
          name="rating"
          onChange={ onChange }
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
