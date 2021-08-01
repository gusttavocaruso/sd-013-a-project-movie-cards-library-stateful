import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
    };
  }

  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.state;
    return (
      <form className="form" data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input type="text" value={ title } data-testid="title-input" onChange="" />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange=""
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" value={ imagePath } data-testid="image-input" onChange="" />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea cols="30" rows="10" onChange="" data-testid="storyline-input">
            { storyline }
          </textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } data-testid="rating-input" onChange="" />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onChange=""
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
