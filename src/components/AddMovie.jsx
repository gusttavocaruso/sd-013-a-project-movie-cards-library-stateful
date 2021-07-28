import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetButton = (event) => {
    event.preventDefault();
  }

  render() {
    const { state } = this;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-change-title" data-testid="title-input-label">
          Título
          <input
            type="texto" name="title" value={ state.title } data-testid="title-input"
            onChange={ this.handleChangeText } id="input-change-title"
          />
        </label>
        <label htmlFor="input-change-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="texto" name="subtitle" value={ state.subtitle } data-testid="subtitle-input"
            onChange={ this.handleChangeText } id="input-change-subtitle"
          />
        </label>
        <label htmlFor="input-change-image" data-testid="image-input-label">
          Imagem
          <input
            type="texto" name="imagePath" value={ state.imagePath } data-testid="image-input"
            onChange={ this.handleChangeText } id="input-change-image"
          />
        </label>
        <label htmlFor="input-change-sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline" value={ state.storyline } data-testid="storyline-input"
            onChange={ this.handleChangeText } 
            id="input-change-sinopse"
          >
          </textarea>
        </label>
        <label htmlFor="input-change-rating" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" value={ state.rating } data-testid="rating-input"
          onChange={ this.handleChangeText } id="input-change-rating" />
        </label>
        <label htmlFor="input-change-genre" data-testid="genre-input-label">
          Gênero
          <select type="number" name="genre" value={ state.genre } data-testid="genre-input"
          onChange={ this.handleChangeText } id="input-change-genre">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select><button data-testid="send-button" onClick={ this.resetButton }>Adicionar filme</button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
