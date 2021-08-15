import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Synopsis from './Synopsis';
import Avaliation from './Avaliation';
import Genre from './Genre';
import ImagePath from './ImagePath';

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
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      // metodo render tava com muitas linhas, tive que seguir a dica no notion
      // do Matheus Duarte de dividir a logica em componentes
      // notion https://www.notion.so/Projeto-Movie-Cards-Library-Stateful-95781cdbc8eb4f4b871505ab952495ba
      <form data-testid="add-movie-form">
        <Title title={ title } onChange={ this.handleChange } />
        <Subtitle subTitle={ subtitle } onChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <Synopsis storyline={ storyline } onChange={ this.handleChange } />
        <Avaliation rating={ Number(rating) } onChange={ this.handleChange } />
        <Genre genre={ genre } onChange={ this.handleChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
};

export default AddMovie;
