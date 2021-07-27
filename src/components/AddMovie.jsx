// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 6 - Crie um componente chamado <AddMovie />
class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '', //  guarda o subtítulo preenchido no formulário por quem usa a aplicação;
      title: '', // guarda o título preenchido no formulário por quem usa a aplicação;
      imagePath: '', // guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
      storyline: '', // guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
      rating: 0, // guarda a nota de avaliação dada no formulário por quem usa a aplicação;
      genre: 'action', // guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
    };

    this.renderTitleInput = this.renderTitleInput.bind(this);
    this.renderSubtitleInput = this.renderSubtitleInput.bind(this);
    this.renderImageInput = this.renderImageInput.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
    this.renderRatingInput = this.renderRatingInput.bind(this);
    this.renderGenderInput = this.renderGenderInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // Impede que os campos sejam zerados pelo reload automatico do submit
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({ // Requisito 14 - Após clicar no botão, é zerado os states
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  // 8 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o título do novo filme
  renderTitleInput() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
          id="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }

  // 9 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o subtítulo do novo filme
  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  // 10 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o caminho da imagem do novo filme
  renderImageInput() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
          id="image-input"
          data-testid="image-input"
        />
      </label>
    );
  }

  // 11 - Renderize uma textarea dentro do formulário em <AddMovie /> para obter a sinopse do novo filme
  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
        />
      </label>
    );
  }

  // 12 - Renderize um input do tipo number dentro do formulário em <AddMovie /> para obter a avaliação do novo filme
  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
          id="rating-input"
          data-testid="rating-input"
        />
      </label>
    );
  }

  // 13 - Renderize um select do formulário em <AddMovie /> para selecionar o gênero do novo filme
  renderGenderInput() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
          id="genre-input"
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      // 7 - Renderize um formulário dentro de <AddMovie />
      <form action="" data-testid="add-movie-form">
        { this.renderTitleInput() }
        { this.renderSubtitleInput() }
        { this.renderImageInput() }
        { this.renderStorylineInput() }
        { this.renderRatingInput() }
        { this.renderGenderInput() }
        {/* 14 - Renderize um botão do formulário em <AddMovie /> para fazer
         uso dos dados do novo filme, contidos no estado de <AddMovie /> */}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
