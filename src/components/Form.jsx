import PropTypes from "prop-types";
import React, { Component } from 'react'

class Form extends Component {
  render () {
    const {
      storyline,
      rating,
      genre,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <form action="">
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={ handleChange }
          >
            { storyline }
          </textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ handleSubmit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  rating: PropTypes.number,
  storyline: PropTypes.string
}

export default Form; 