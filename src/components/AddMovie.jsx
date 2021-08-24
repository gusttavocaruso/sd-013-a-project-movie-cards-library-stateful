import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Componentes do addmovie/Titulo';
import Subtitle from './Componentes do addmovie/Subtitulo';
import Image from './Componentes do addmovie/Imagem';
import Storyline from './Componentes do addmovie/Hist';
import Rating from './Componentes do addmovie/Nota';
import Genre from './Componentes do addmovie/Genero';

class AddMovie extends Component {
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
  }

  handleChange =({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleAdd = () => {
    const { onClick } = this.props;
    onClick(this.state);

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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleAdd } = this;

    return (
      <form className="add-movie" data-testid="add-movie-form">
        <div className="new-movie-info">
          <Title value={ title } onChange={ handleChange } />
          <Subtitle value={ subtitle } onChange={ handleChange } />
          <Image value={ imagePath } onChange={ handleChange } />
          <Storyline value={ storyline } onChange={ handleChange } />
          <Rating value={ rating } onChange={ handleChange } />
          <Genre value={ genre } onChange={ handleChange } />
        </div>
        <button data-testid="send-button" type="button" onClick={ handleAdd }>
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
