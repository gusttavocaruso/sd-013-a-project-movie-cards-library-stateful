import React from 'react';
import PropTypes from 'prop-types';
import InputGener from './InputGener';
import InputTextarea from './InputTextarea';
import InputTitle from './InputTitle';
import InputSub from './InputSub';
import InputImagem from './InputImagem';

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
    this.butonClick = this.butonClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value, // função genérica (muda o nome e o valor)
    });
  }

  ClearClick = (event) => {
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  butonClick = (event) => {
    event(this.state);
  }

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;

    const { onClick } = this.props;

    return (
      <form
        data-testid="add-movie-form"
        onSubmit={ this.ClearClick }
      >
        <InputTitle value={ title } onChange={ this.handleClick } />
        <InputSub value={ subtitle } onChange={ this.handleClick } />
        <InputImagem value={ imagePath } onChange={ this.handleClick } />
        <InputGener value={ genre } onChange={ this.handleClick } />
        <InputTextarea value={ storyline } onChange={ this.handleClick } />
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
            name="rating"
            id="input_assessment"
          />
        </label>
        <button
          data-testid="send-button"
          type="submit" // testar com submit
          onClick={ () => this.butonClick(onClick) }
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
