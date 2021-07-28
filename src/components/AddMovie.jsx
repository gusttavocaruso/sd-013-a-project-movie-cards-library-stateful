import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form action="##" data-testid="add-movie-form">
        <label htmlFor="##" data-testid="title-input-label">
          Título:
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="##" data-testid="subtitle-input-label">
          Subtítulo:
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="##" data-testid="genre-input-label">
          Gênero:
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <label htmlFor="##" data-testid="image-input-label">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="##" data-testid="rating-input-label">
          Avaliação:
          <input type="number" data-testid="rating-input" />
        </label>
        <label htmlFor="##" data-testid="storyline-input-label">
          Sinopse:
          <textarea cols="30" rows="5" data-testid="storyline-input" />
        </label>
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
