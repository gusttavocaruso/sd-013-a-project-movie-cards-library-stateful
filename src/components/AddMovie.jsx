import React from 'react';
import PropTypes from 'prop-types';
import Genre from './AddMovieComponents/Genre';
import ImagePath from './AddMovieComponents/ImagePath';
import Rating from './AddMovieComponents/Rating';
import Storyline from './AddMovieComponents/Storyline';
import Subtitle from './AddMovieComponents/Subtitle';
import Title from './AddMovieComponents/Title';

// Detalha o estado inicial da busca pelo novo filme, setando todos os argumentos como uma string vazia.
const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  HandleMovie = () => {
    // essa função, que adiciona um filme ao array presente em data.js, é recebida como props da MovieLibrary
    const { onClick } = this.props;
    // Executa a função de adicionar um filme utilizando o estado do componente atual, que foi modificado
    // a partir dos HandleChange presentes nos componentes de "AddMovie"
    onClick(this.state);
    // Depois de executar a função de adicionar o filme presente no state atual, ele reseta o state para o padrão,
    // assim é possível adicionar um segundo filme
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
        <Title handleChange={ this.handleChange } title={ title } />
        <Subtitle handleChange={ this.handleChange } subtitle={ subtitle } />
        <ImagePath handleChange={ this.handleChange } imagePath={ imagePath } />
        <Storyline handleChange={ this.handleChange } storyline={ storyline } />
        <Rating handleChange={ this.handleChange } rating={ rating } />
        <Genre handleChange={ this.handleChange } genre={ genre } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.HandleMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
