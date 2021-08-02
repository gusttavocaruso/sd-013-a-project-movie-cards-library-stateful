import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  render() {
    const { rating } = this.state;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleRatingChange }
        />
      </label>
    );
  }
}

export default Rating;
