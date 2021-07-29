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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input type="text" value={ title } name="title" data-testid="title-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={ subtitle } name="subtitle" data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input type="text" value={ imagePath } name="imagePath" data-testid="image-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" id="storyline" cols="30" rows="10" value={ storyline } data-testid="storyline-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } name="rating" data-testid="rating-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="genre" value={ genre } data-testid="genre-input" onChange={ this.handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;
