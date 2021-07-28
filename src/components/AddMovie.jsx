import React from 'react';
import Formulario from './formulario';

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
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    return (
      <Formulario
        title={ title }
        subtitle={ subtitle }
        imagePath={ imagePath }
        rating={ rating }
        genre={ genre }
        storyline={ storyline }
        handleChange={ this.handleChange }
        onClick={ this.onClick }
      />
    );
  }
}

export default AddMovie;
