import React from 'react';
import PropTypes from 'prop-types';

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

    this.state = INITIAL_STATE;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImageInput = this.renderImageInput.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderSelectGenreInput = this.renderSelectGenreInput.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  // Inspirada na sintaxe do componente MovieForm do projeto Movie Card Library CRUD
  updateState(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
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
          value={ title }
          onChange={ (event) => this.updateState('title', event.target.value) }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
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
          value={ subtitle }
          onChange={ (event) => this.updateState('subtitle', event.target.value) }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="image-input"
          id="image-input"
          placeholder="Insira a imagem do filme"
          value={ imagePath }
          onChange={ (event) => this.updateState('imagePath', event.target.value) }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          name="storyline"
          id="storyline-input"
          placeholder="Insira a sinopse do filme"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ (event) => this.updateState('storyline', event.target.value) }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação:
        <input
          type="number"
          name="rating"
          id="rating-input"
          value={ rating }
          min="0"
          max="5"
          onChange={ (event) => this.updateState('rating', event.target.value) }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderSelectGenreInput() {
    const { genre } = this.state;

    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero:
        <select
          name="genre"
          id="select-input"
          value={ genre }
          onChange={ (event) => this.updateState('genre', event.target.value) }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option" default>Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
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
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineInput()}
        {this.renderRatingInput()}
        {this.renderSelectGenreInput()}
        {this.renderSubmitButton()}
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
