import React from 'react';
import PropTypes from 'prop-types';

class FormAddMovies1 extends React.Component {
  render() {
    const { rating, genre, changeTitle } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="input-number">
          Avaliação
          <input
            id="input-number"
            type="number"
            value={ rating }
            name="rating"
            data-testid="rating-input"
            onChange={ changeTitle }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="s">
          Gênero
          <select
            value={ genre }
            onChange={ changeTitle }
            name="genre"
            id="s"
            data-testid="genre-input"
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

FormAddMovies1.propTypes = {
  rating: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
};

export default FormAddMovies1;
