import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div className="movie-add-div">
        <form data-testid="add-movie-form" className="movie-add">
          <label htmlFor="movieTitle" data-testid="title-input-label">
            Título
            <input type="text" name="movieTitle" data-testid="title-input" />
          </label>
          <label htmlFor="movieSubTitle" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" name="movieSubTitle" data-testid="subtitle-input" />
          </label>
          <label htmlFor="movieImage" data-testid="image-input-label">
            Imagem
            <input type="text" name="movieImage" data-testid="image-input" />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea data-testid="storyline-input" name="storyline">
              Apenas algum texto em uma área de texto
            </textarea>
          </label>
          <label htmlFor="movieRating" data-testid="rating-input-label">
            Avaliação
            <input type="number" name="movieRating" data-testid="rating-input" />
          </label>
          <label htmlFor="selectGender" data-testid="genre-input-label">
            Gênero
            <select name="selectGender" data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="button" data-testid="send-button">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
