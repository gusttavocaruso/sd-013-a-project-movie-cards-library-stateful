import React from 'react';
import PropTypes from 'prop-types';

class AddMovieForm extends React.Component {
  render() {
    const { handleChange, rating, handleSubmit, storyline, genre } = this.props;
    return (
      <section className="form">
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="10"
            onChange={ handleChange }
            data-testid="storyline-input"
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
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ handleChange } data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleSubmit }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}
AddMovieForm.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  genre: PropTypes.string,
}.isRequired;
export default AddMovieForm;
