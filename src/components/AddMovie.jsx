// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    // this.setState = this.setState.bind(this)

    this.state = {
      subtitle: '', // guarda o subtítulo preenchido no formulário por quem usa a aplicação;
      title: '', // guarda o título preenchido no formulário por quem usa a aplicação;
      imagePath: '', // guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
      storyline: '', // guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
      rating: 0, // guarda a nota de avaliação dada no formulário por quem usa a aplicação;
      genre: 'action', // guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
    };
  }

    onClick = () => {
      this.setState = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    }

    // função para atualizar state
    handleChange = (event) => {
      // console.log(event.target.value)
      this.setState({
        [event.target.className]: event.target.value,
      });
    }

    renderTitle = (title) => {
      const aTitle = (
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            className="title"
            data-testid="title-input"
            type="text"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
      );
      return aTitle;
    }

    renderSubtitle = (subtitle) => {
      const aSubtitle = (
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            className="subtitle"
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
      );
      return aSubtitle;
    }

    renderImage = (imagePath) => {
      const aImage = (
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            className="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>
      );
      return aImage;
    }

    renderStoryline = (storyline) => {
      const aStoryline = (
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
          onChange={ this.handleChange }
          value={ storyline }
        >
          Sinopse
          <textarea className="storyline" name="" id="" data-testid="storyline-input" />
        </label>
      );
      return aStoryline;
    }

    renderRating = (rating) => {
      const aRating = (
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            className="rating"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ rating }
          />
        </label>
      );
      return aRating;
    }

    renderGenre = (genre) => {
      const aGenre = (
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            className="genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      );
      return aGenre;
    }

    renderButton = (f) => {
      // const { onClick } = this.props;
      const aButton = (
        <button
          data-testid="send-button"
          onClick={ () => this.onClick(f) }
          type="button"
        >
          Adicionar filme:
        </button>
      );
      return aButton;
    }

    render() {
      const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
      const { onClick } = this.props;
      return (
        <div>
          <h1>Espaço para adicionar Movie</h1>

          <form data-testid="add-movie-form">

            {this.renderTitle(title)}
            {this.renderSubtitle(subtitle)}
            {this.renderImage(imagePath)}
            {this.renderStoryline(storyline)}
            {this.renderRating(rating)}
            {this.renderGenre(genre)}
            {this.renderButton(onClick)}

          </form>

        </div>
      );
    }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
