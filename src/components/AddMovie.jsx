import React, { Component } from 'react';
import Avaliacao from './avaliacao';
import Sinopse from './sinopse';
import Subtitle from './subtitle';
import Title from './title';
import ImagePath from './image';
import Genero from './genre';
import Button from './button';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  handleClick() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <ImagePath handleChange={ this.handleChange } imagePath={ imagePath } />
        <Sinopse handleChange={ this.handleChange } storyline={ storyline } />
        <Avaliacao handleChange={ this.handleChange } rating={ rating } />
        <Genero handleChange={ this.handleChange } genre={ genre } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
