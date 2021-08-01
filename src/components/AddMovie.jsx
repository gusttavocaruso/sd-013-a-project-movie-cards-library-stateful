import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStorieline from './AddStoriline';
import AddRating from './AddRating';
import AddGenre from './AddGenre';

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

  // função genérica copiada do repositório das aulas au vivo da turma 13 tribo A.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // função criada por Luiza Antiques, turma 13 tribo A, compartilhada e explicada num grupo de estudos da turma.
  handleClick = () => {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ title } onChange={ this.handleChange } />
        <AddSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <AddImage imagePath={ imagePath } onChange={ this.handleChange } />
        <AddStorieline storyline={ storyline } onChange={ this.handleChange } />
        <AddRating rating={ rating } onChange={ this.handleChange } />
        <AddGenre genre={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          onClick={ this.handleClick }
          type="submit"
        >
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
