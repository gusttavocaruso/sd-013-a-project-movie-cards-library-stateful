import React from 'react';
import Proptypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImg from './InputImg';
import TextArea from './TextArea';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import Button from './Button';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  clickButton = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { state, handleChange, clickButton } = this;
    return (
      <form data-testid="add-movie-form">
        <InputTitle
          value={ state.title }
          onChange={ handleChange }
        />
        <InputSubtitle
          value={ state.subtitle }
          onChange={ handleChange }
        />
        <InputImg
          value={ state.imagePath }
          onChange={ handleChange }
        />
        <TextArea
          value={ state.storyline }
          onChange={ handleChange }
        />
        <InputRating
          value={ state.rating }
          onChange={ handleChange }
        />
        <SelectGenre
          value={ state.genre }
          onChange={ handleChange }
        />
        <Button onClick={ clickButton } />
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func,
}.isrequired;

export default AddMovie;
