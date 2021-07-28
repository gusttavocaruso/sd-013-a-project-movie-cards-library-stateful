// implement AddMovie component here
import React from 'react';
import Parte1 from './Parte1';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Parte1 title={ title } onChange={ this.handleChange } subtitle={ subtitle } />
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            data-testid="image-input"
            imagePath={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id=""
            cols="30"
            rows="10"
            storyline={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name=""
            id=""
            rating={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
