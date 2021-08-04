import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const {
      storyLine,
      handleChange,
      rating,
      genre,
    } = this.props;

    return (
      <div>
        <label htmlFor="input-storyLine-add" data-testid="storyline-input-label">
          <textarea
            id="input-storyLine-add"
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ handleChange }
          />
          Sinopse
        </label>
        <label htmlFor="input-rating-add" data-testid="rating-input-label">
          <input
            type="number"
            id="input-rating-add"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
          Avaliação
        </label>
        <label htmlFor="input-genre-add" data-testid="genre-input-label">
          <select
            id="input-genre-add"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          Gênero
        </label>
      </div>
    );
  }
}

InputStoryline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default InputStoryline;
