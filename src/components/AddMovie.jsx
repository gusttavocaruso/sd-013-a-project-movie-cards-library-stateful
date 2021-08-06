import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormTitle from './FormTitle';
import FormSubtitle from './FormSubtitle';
import FormImage from './FormImage';
import FormStoryline from './FormStoryline';
import FormRating from './FormRating';
import FormGenre from './FormGenre';
import FormButton from './FormButton';

export default class AddMovie extends Component {
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.setState({ [name]: value });
  }

  handleAdd = () => {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleAdd } = this;

    return (
      <form data-testid="add-movie-form">
        <FormTitle value={ title } onChange={ handleChange } />
        <FormSubtitle value={ subtitle } onChange={ handleChange } />
        <FormImage value={ imagePath } onChange={ handleChange } />
        <FormStoryline value={ storyline } onChange={ handleChange } />
        <FormRating value={ rating } onChange={ handleChange } />
        <FormGenre value={ genre } onChange={ handleChange } />
        <FormButton onClick={ handleAdd } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
