import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './forms/inputTitle';
import InputSubtitle from './forms/inputSubtitle';
import InputImage from './forms/inputImage';
import InputTextArea from './forms/inputTextArea';
import InputNumber from './forms/inputNumber';
import Select from './forms/select';
import Button from './forms/button';

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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <InputTitle onChange={ this.handleChange } value={ title } />
        <InputSubtitle onChange={ this.handleChange } value={ subtitle } />
        <InputImage onChange={ this.handleChange } value={ imagePath } />
        <InputTextArea onChange={ this.handleChange } value={ storyline } />
        <InputNumber onChange={ this.handleChange } value={ rating } />
        <Select onChange={ this.handleChange } value={ genre } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
