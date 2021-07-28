import React from 'react';

class InputRatingAndGenre extends React.Component {
  render() {
    const { rating, genre, onChangeFunction } = this.props;

    return (
      <span>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            id="rating-input"
            onChange={ onChangeFunction }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            id="genre-input"
            onChange={ onChangeFunction }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </span>
    );
  }
}

export default InputRatingAndGenre;