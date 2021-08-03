import React from 'react';
import PropTypes from 'prop-types';

class RatingAndGenre extends React.Component {
  render() {
    const { rating, genre, onChange } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            data-testid="rating-input"
            onChange={ onChange }
            value={ rating }
          />
        </label>
        <label htmlFor="select-add" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-add"
            value={ genre }
            onChange={ onChange }
            data-testid="genre-input"
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

RatingAndGenre.propTypes = {
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingAndGenre;

/* Referências: Aula ao vivo 12.2 disponível no course, Repositório de aulas ao vivo para
estudantes da Turma 13 - Tribo A.
Links utilizados:
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginForm.js
https://github.com/tryber/sd-13a-live-lectures/blob/lecture/12.2/form/src/components/LoginInput.js
*/
