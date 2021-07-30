import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  reset = (key) => {
    key(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  funcTheButton = (funct) => {
    const theButtonReturn = (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.reset(funct) }
      >
        Adicionar filme
      </button>
    );
    return theButtonReturn;
  }

  funcSelectGenero = (genre) => {
    const generoReturn = (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.hadleChange }
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
    return generoReturn;
  }

  funcRating = (rating) => {
    const ratingReturn = (
      <label data-testid="rating-input-label" htmlFor="number">
        Avaliação
        <input
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
          onChange={ this.hadleChange }
        />
      </label>);
    return ratingReturn;
  }

  funcTextArea = (storyline) => {
    const textAreaReturn = (
      <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          onChange={ this.hadleChange }
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
        />
      </label>
    );
    return textAreaReturn;
  }

  funcImage = (imagePath) => {
    const imageReturn = (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          name="imagePath"
          onChange={ this.hadleChange }
        />
      </label>
    );
    return imageReturn;
  }

  funcTittle = (title) => {
    const titleReturn = (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          name="title"
          onChange={ this.hadleChange }
        />
      </label>
    );
    return titleReturn;
  }

  funcSubtitle = (subtitle) => {
    const subtitleReturn = (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          name="subtitle"
          onChange={ this.hadleChange }
        />
      </label>
    );
    return subtitleReturn;
  }

  hadleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (

      <form data-testid="add-movie-form">
        {this.funcTittle(title)}
        {this.funcSubtitle(subtitle)}
        {this.funcImage(imagePath)}
        {this.funcTextArea(storyline)}
        {this.funcRating(rating)}
        {this.funcSelectGenero(genre)}
        {this.funcTheButton(onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
