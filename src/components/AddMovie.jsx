import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './addMovieComponents/TitleInput';
import SubtitleInput from './addMovieComponents/SubtitleInput';
import ImageInput from './addMovieComponents/ImageInput';
import NumberInput from './addMovieComponents/NumberInput';
import StorylineInput from './addMovieComponents/StorylineInput';
import GenreInput from './addMovieComponents/GenreInput';

class AddMovie extends React.Component {
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

  HandleChange = ({ target }) => {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput HandleChange={ this.HandleChange } componentValue={ title } />
        <SubtitleInput HandleChange={ this.HandleChange } componentValue={ subtitle } />
        <ImageInput HandleChange={ this.HandleChange } componentValue={ imagePath } />
        <NumberInput HandleChange={ this.HandleChange } componentValue={ rating } />
        <StorylineInput HandleChange={ this.HandleChange } componentValue={ storyline } />
        <GenreInput HandleChange={ this.HandleChange } componentValue={ genre } />
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

AddMovie.defaultProps = {
  onClick: null,
};

export default AddMovie;
