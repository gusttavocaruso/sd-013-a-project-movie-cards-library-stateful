import React from 'react';
import PropTypes from 'prop-types';

class RatingAndGenre extends React.Component {
  render() {
    const { onChange, rating, genre } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            name="rating"
            id="rating"
            className="input-box"
            value={ rating }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            id="genre"
            className="input-box"
            value={ genre }
            data-testid="genre-input"
            onChange={ onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

RatingAndGenre.propTypes = {
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default RatingAndGenre;
