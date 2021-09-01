import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import ImagePath from './ImagePath';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

class AddMovie extends Component {
  constructor() {
    super();
    this.setState = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <Titulo titulo={ title } onChange={ this.handleChange } />
        <Subtitulo subtitulo={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagem={ imagePath } onChange={ this.handleChange } />
        <Sinopse sinopse={ storyline } onChange={ this.handleChange } />
        <Avaliacao avaliacao={ Number(rating) } onChange={ this.handleChange } />
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
