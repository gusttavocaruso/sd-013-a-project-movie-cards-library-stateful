import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cartaz from './MovieComps/Cartaz';
import Rotten from './MovieComps/rottenTomatoes';
import Gen from './MovieComps/Gen';
import Sinopse from './MovieComps/Sinopse';
import Subtitle from './MovieComps/Subtitle';
import Title from './MovieComps/Title';

const INICIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
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

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INICIAL_STATE);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Cartaz imagePath={ imagePath } handleChange={ this.handleChange } />
        <Sinopse storyline={ storyline } handleChange={ this.handleChange } />
        <Rotten rating={ rating } handleChange={ this.handleChange } />
        <Gen genre={ genre } handleChange={ this.handleChange } />
        <button data-testid="send-button" type="button" onClick={ this.handleButton }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
