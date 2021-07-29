import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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
    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  // funcao feita com ajuda de Luiza antique e Alineke Hoshiro
  clickButton(event) {
    event.preventDefault();
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
    const { subtitle,
      title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } onChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
        <InputTextArea storyline={ storyline } onChange={ this.handleChange } />
        <InputRating rating={ rating } onChange={ this.handleChange } />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
        <button data-testid="send-button" type="submit" onClick={ this.clickButton }>
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
