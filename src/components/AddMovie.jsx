import React from 'react';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  renderSubmitButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ (event) => this.handleSubmit(event) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {/* Req. 8 */}
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título:
          <input
            type="text"
            name="title"
            id="title-input"
            placeholder="Insira o título do filme"
            value={title}
            onChange={(event) => this.updateState('title', event.target.value)}
            data-testid="title-input"
          />
        </label>

        {/* Req. 9 */}
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo:
          <input
            type="text"
            name="subtitle-input"
            id="subtitle-input"
            placeholder="Insira o subtítulo do filme"
            value={subtitle}
            onChange={(event) => this.updateState('subtitle', event.target.value)}
            data-testid="subtitle-input"
          />
        </label>

        {/* Req. 10 */}
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            name="image-input"
            id="image-input"
            value={imagePath}
            onChange={(event) => this.updateState('imagePath', event.target.value)}
            data-testid="image-input"
          />
        </label>

        {/* Req. 11 */}
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline-input"
            cols="30"
            rows="10"
            value={storyline}
            onChange={(event) => this.updateState('storyline', event.target.value)}
            data-testid="storyline-input"
          />
        </label>

        {/* Req. 12 */}
        <label htmlFor="number-input" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            name="rating"
            id="number-input"
            value={rating}
            max="5"
            onChange={(event) => this.updateState('rating', event.target.value)}
            data-testid="rating-input"
          />
        </label>

        {/* Req. 13 */}
        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            id="select-input"
            value={genre}
            onChange={(event) => this.updateState('genre', event.target.value)}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        {/* Req. 14 */}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

export default AddMovie;
