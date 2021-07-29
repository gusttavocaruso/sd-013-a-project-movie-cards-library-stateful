import React from 'react';
import PropTypes from 'prop-types';
import FormsInput from './FormsInput';
import FormsTextArea from './FormsTextArea';
import FormsSelectInput from './FormsSelectInput';

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

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  };

  resetState = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderMovieCard = (event) => {
    event.preventDefault();
    const { resetState, props: { onClick } } = this;
    onClick(this.state);
    resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, renderMovieCard } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <FormsInput value={ title } id="title" func={ handleChange } text="Título" />
        <FormsInput
          value={ subtitle }
          id="subtitle"
          func={ handleChange }
          text="Subtítulo"
        />
        <FormsInput
          value={ imagePath }
          id="imagePath"
          func={ handleChange }
          text="Imagem"
        />

        <FormsTextArea
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
          text="Sinopse"
        />

        <FormsInput
          value={ rating }
          id="rating"
          type="number"
          func={ handleChange }
          text="Avaliação"
        />

        <FormsSelectInput
          id="genre"
          onChange={ handleChange }
          value={ genre }
        />

        <button type="button" data-testid="send-button" onClick={ renderMovieCard }>
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
