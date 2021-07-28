import React, { Component } from 'react';
import Avaliacao from './avaliacao';
import Sinopse from './sinopse';
import Subtitle from './subtitle';
import Title from './title';
import ImagePath from './image';

class AddMovie extends Component {
  constructor() {
    super();

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

    const { subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } />
        <Subtitle subtitle={ subtitle } />
        <ImagePath imagePath={ imagePath } />
        <Sinopse storyline={ storyline } />
        <Avaliacao rating={ rating } />
      </form>
    );
  }
}

export default AddMovie;
