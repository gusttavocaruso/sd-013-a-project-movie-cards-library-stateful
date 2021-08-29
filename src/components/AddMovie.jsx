import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.clickReset = this.clickReset.bind(this);
    this.writeChange = this.writeChange.bind(this);
  }

  clickReset(event) {
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

  writeChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } writeChange={ this.writeChange } />
        <InputSubTitle value={ subtitle } writeChange={ this.writeChange } />
        <InputImage value={ imagePath } writeChange={ this.writeChange } />
        <InputTextArea value={ storyline } writeChange={ this.writeChange } />
        <InputRating value={ rating } writeChange={ this.writeChange } />
        <InputGenre value={ genre } writeChange={ this.writeChange } />
        <button data-testid="send-button" onClick={ this.clickReset } type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
