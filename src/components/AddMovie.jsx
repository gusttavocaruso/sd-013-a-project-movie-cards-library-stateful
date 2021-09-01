import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genero from './Movies/Genero';
import Image from './Movies/Image';
import Rating from './Movies/Rating';
import StoryLine from './Movies/StoryLine';
import Subtitle from './Movies/Subtitle';
import Title from './Movies/Title';
import ButtonAdd from './Movies/ButtonAdd';

const estadoInicial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = estadoInicial;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(estadoInicial);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
        <Genero genre={ genre } handleChange={ this.handleChange } />
        <ButtonAdd addNewMovie={ this.addNewMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
