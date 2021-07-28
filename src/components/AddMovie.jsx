import React from 'react';
import Proptypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImg from './InputImg';
import TextArea from './TextArea';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { state, handleChange } = this;
    const { onClick } = this.props;

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
        <section>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onClick }
          >
            Adicionar filme
          </button>
        </section>
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func,
}.isrequired;

export default AddMovie;
