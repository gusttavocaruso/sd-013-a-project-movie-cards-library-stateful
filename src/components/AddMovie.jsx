import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';
import Botao from './Botao';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick();
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <Titulo handleChange={ this.handleChange } title={ title } />
        <Subtitulo handleChange={ this.handleChange } subtitle={ subtitle } />
        <Imagem handleChange={ this.handleChange } imagePath={ imagePath } />
        <Sinopse handleChange={ this.handleChange } storyline={ storyline } />
        <Avaliacao handleChange={ this.handleChange } rating={ rating } />
        <Genero handleChange={ this.handleChange } genre={ genre } />
        <Botao onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
