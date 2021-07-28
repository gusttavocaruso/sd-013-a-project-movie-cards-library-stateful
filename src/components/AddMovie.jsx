// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
  const { onCLick } = this.props;
  const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input 
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
            name="title"
            value={ title }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input 
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            name="subtitle"
            value={ subtitle }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem:
          <input 
            value={ imagePath }
            type=""
            data-testid="image-input"
            onChange={ this.handleChange }
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse:
          <textarea
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação:
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero:
            <select 
              name="genre"
              data-testid="genre-input"
              onChange={ this.handleChange }
              value={ genre }
            />
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
        </label>
      </form>
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
