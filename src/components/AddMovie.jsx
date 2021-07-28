// implement AddMovie component here
import React from 'react';
import Parte1 from './Parte1';
import Parte2 from './Parte2';

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
        <Parte1
          title={ title }
          onChange={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <Parte2
          storyline={ storyline }
          rating={ rating }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
