import React from 'react';
import PropTypes from 'prop-types';

class TextAreaAdd extends React.Component {
  render() {
    const { handleChange, rating, genre, storyline } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="sinopse">
          Sinopse
          <textarea
            onChange={ handleChange }
            name="storyline"
            id="sinopse"
            cols="30"
            rows="10"
            data-testid="storyline-input"
          >
            { storyline }
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="avaliaçao">
          Avaliação
          <input
            name="rating"
            type="number"
            id="avaliaçao"
            data-testid="rating-input"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genero">
          Gênero
          <select
            name="genre"
            id="genero"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

TextAreaAdd.propTypes = {
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default TextAreaAdd;
