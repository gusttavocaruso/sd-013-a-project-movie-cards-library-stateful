import React from 'react';
import PropTypes from 'prop-types';

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

  handleChange = ({ target }) => {
    console.log(this);
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  inputTitle = () => {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          id="title"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSubTitle = () => {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="subtitle"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputImage = () => {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          id="image"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  textAreaStoryLine = () => {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          id="storyline"
          name="storyline"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputRating = () => {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectGenre = () => {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="genreOptions"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetInput = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          {this.inputTitle()}
          {this.inputSubTitle()}
          {this.inputImage()}
          {this.textAreaStoryLine()}
          {this.inputRating()}
          {this.selectGenre()}
          <button
            type="button"
            data-testid="send-button"
            id="add"
            onClick={ () => {
              onClick(this.state);
              this.resetInput();
            } }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
