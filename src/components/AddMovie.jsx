import React from 'react';
import Subtitle from './subtitle';
import TitleInput from './title';
import Imagem from './image';
import Sinopse from './sinopse';
import Avaliacao from './avaliacao';
import Select from './select';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onClick = () => {
    /* this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }); */
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form method="get" data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Imagem value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <Select value={ genre } handleChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
