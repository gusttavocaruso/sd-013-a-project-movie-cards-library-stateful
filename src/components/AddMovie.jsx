import React from 'react';
import PropTypes from 'prop-types';
import InputGener from './InputGener';
import InputTextarea from './InputTextarea';
import InputTitle from './InputTitle';
import InputSub from './InputSub';

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

  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value, // função genérica (muda o nome e o valor)
    });
  }

  butonClick = (e) => {
    e(this.setState);
  }

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;

    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <InputGener value={ genre } onChange={ this.handleClick } />
        <InputTextarea value={ storyline } onChange={ this.handleClick } />
        <InputSub value={ title } onChange={ this.handleClick } />
        <InputTitle value={ subtitle } onChange={ this.handleClick } />
        <label
          data-testid="image-input-label"
          htmlFor="input_image"
        >
          Image
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            name={ imagePath }
            onChange={ this.handleClick }
            id="input_image"
          />
        </label>
        <label
          data-testid="rating-input-label"
          htmlFor="input_assessment"
        >
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleClick }
            name={ rating }
            id="input_assessment"
          />
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ () => { this.butonClick(onClick); } }
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
