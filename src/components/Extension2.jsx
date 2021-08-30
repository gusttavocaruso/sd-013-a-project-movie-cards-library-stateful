import React from 'react';
import PropTypes from 'prop-types';

class Extension2 extends React.Component {
  render() {
    const { storyline, rating, genre, change } = this.props;

    return (
      <div>
        <label htmlFor="story-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ change }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            onChange={ change }
          />
        </label>
        <label htmlFor="genre-select" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-select"
            data-testid="genre-input"
            value={ genre }
            onChange={ change }
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

Extension2.propTypes = {
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  change: PropTypes.func.isRequired,
};

Extension2.defaultProps = {
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default Extension2;
