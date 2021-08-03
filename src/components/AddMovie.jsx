import React from 'react';
import InputGenre from './form/inputGenre';
import InputImage from './form/inputImage';
import InputStory from './form/inputStory';
import InputSubtitle from './form/inputSubtitle';
import InputTitle from './form/inputTitle';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <InputStory value={ storyline } onChange={ this.handleChange } />
        <InputGenre value={ genre } onChange={ this.handleChange } />
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            onChange={ ({ target }) => this.setState({ rating: target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
