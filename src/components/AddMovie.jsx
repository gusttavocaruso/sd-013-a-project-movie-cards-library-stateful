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
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( { target } ) { //desestruturando event.target
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" name="title" type="text" value={ title } id="title-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" name="subtitle" type="text" value={ subtitle } id="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" name="imagePath" type="text" value={ imagePath } id="image-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea data-testid="storyline-input" name="storyline" value={ storyline } id="storyline-input" onChange={ this.handleChange } cols="30" rows="10"></textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input data-testid="rating-input" name="rating" type="number" value={ rating } id="rating-input" onChange={ this.handleChange } />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select data-testid="genre-input" name="genre" value={ genre } id="genre-input" onChange={ this.handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.PropTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;