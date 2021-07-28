import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      raiting: 0,
      genre: 'action',
    }; */

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange({ target }) {
    const { type, name, value } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({ [name]: newValue });
  }

  handleClear(event) {
    const { onClick } = this.props;
    onClick(event);
    /* this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      raiting: 0,
      genre: 'action',
    }); */
  }

  renderTitle() {
    const { title } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title"
      >
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.props;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.props;
    return (
      <label
        htmlFor="imagem"
        data-testid="image-input-label"
      >
        Caminho da Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyLine } = this.props;
    return (
      <label
        htmlFor="sinopse"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyLine"
          type="text"
          data-testid="storyline-input"
          value={ storyLine }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRaiting() {
    const { raiting } = this.props;
    return (
      <label
        htmlFor="avaliação"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="raiting"
          type="number"
          data-testid="rating-input"
          defaultValue={ 0 }
          value={ raiting }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.props;
    return (
      <label
        htmlFor="gênero"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          type="text"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.handleClear }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form
        data-testid="add-movie-form"
      >
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderStoryline() }
        { this.renderRaiting() }
        { this.renderGenre() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;

// Os htmlFor em cada label é para evitar o erro no lint "A form label must be associated with a control"
// Na linha 52 utilizei o defaultValue para definir um valor padrão, apenas o value define o valor atual após mudanças.
