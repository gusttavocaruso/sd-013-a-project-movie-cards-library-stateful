import React from 'react';
import PropTypes from 'prop-types';

class NewMovieInputs2 extends React.Component {
  render() {
    const { storyline, rating, genre, changeStates } = this.props;

    return (
      <div>
        <label htmlFor="story-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ changeStates }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ changeStates }
          />
        </label>
        <label htmlFor="genre-select" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-select"
            value={ genre }
            data-testid="genre-input"
            onChange={ changeStates }
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

NewMovieInputs2.propTypes = {
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  changeStates: PropTypes.func.isRequired,
};

NewMovieInputs2.defaultProps = {
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default NewMovieInputs2;
