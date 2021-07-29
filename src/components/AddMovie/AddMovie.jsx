import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';
import ImagePath from './ImagePath';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      onClick,
    } = this.props;

    const { title, subtitle, rating, genre, imagePath, storyline } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <Titulo titulo={ title } onChange={ this.handleChange } />
        <Subtitulo subtitulo={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagem={ imagePath } onChange={ this.handleChange } />
        <Sinopse copy={ storyline } onChange={ this.handleChange } />
        <Avaliacao nota={ Number(rating) } onChange={ this.handleChange } />
        <Genero genero={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => this.handleClick(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
