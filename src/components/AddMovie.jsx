import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    const { name } = target;
    const value = (target.type === 'checked') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieFunc = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInput = () => {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          id="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitleInput = () => {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImageInput = () => {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStorylineInput = () => {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRatingInput = () => {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenreSelect = () => {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
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

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImageInput()}
          {this.renderStorylineInput()}
          {this.renderRatingInput()}
          {this.renderGenreSelect()}
          <button type="submit" data-testid="send-button" onClick={ this.addMovieFunc }>
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
