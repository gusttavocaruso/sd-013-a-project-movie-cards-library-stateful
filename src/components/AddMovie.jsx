import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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
        <InputTitle value={ title } clickChange={ this.writeChange } />
        <InputSubTitle value={ subtitle } clickChange={ this.writeChange } />
        <InputImage value={ imagePath } clickReset={ this.writeChange } />
        <InputTextArea value={ storyline } clickChange={ this.writeChange } />
        <InputRating value={ rating } clickChange={ this.writeChange } />
        <InputGenre value={ genre } clickReset={ this.writeChange } />
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
